CREATE TABLE Accounts (
  account_id NUMBER PRIMARY KEY,
  account_type VARCHAR2(20),
  balance NUMBER
);

INSERT INTO Accounts VALUES (101, 'Savings', 1000);
INSERT INTO Accounts VALUES (102, 'Current', 5000);
INSERT INTO Accounts VALUES (103, 'Savings', 2000);
INSERT INTO Accounts VALUES (104, 'Savings', 800);
INSERT INTO Accounts VALUES (105, 'Current', 1500);

CREATE TABLE Employees (
  employee_id NUMBER PRIMARY KEY,
  employee_name VARCHAR2(50),
  salary NUMBER,
  department_id NUMBER
);

INSERT INTO Employees VALUES (1, 'Alice', 50000, 10);
INSERT INTO Employees VALUES (2, 'Bob', 60000, 10);
INSERT INTO Employees VALUES (3, 'Charlie', 55000, 20);
INSERT INTO Employees VALUES (4, 'David', 70000, 20);
INSERT INTO Employees VALUES (5, 'Eva', 65000, 30);


--Scenario 1 
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
  UPDATE Accounts
  SET balance = balance + (balance * 0.01)
  WHERE account_type = 'Savings';
  
  DBMS_OUTPUT.PUT_LINE('Monthly interest applied to all savings accounts.');
END;
/


--Scenario 2
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
  dept_id IN NUMBER,
  bonus_percentage IN NUMBER
) AS
BEGIN
  UPDATE Employees
  SET salary = salary + (salary * bonus_percentage / 100)
  WHERE department_id = dept_id;
  
  DBMS_OUTPUT.PUT_LINE('Bonus applied to department ID ' || dept_id);
END;
/


--Scenario 3
CREATE OR REPLACE PROCEDURE TransferFunds(
  from_account_id IN NUMBER,
  to_account_id IN NUMBER,
  amount IN NUMBER
) AS
  insufficient_balance EXCEPTION;
  from_balance NUMBER;
BEGIN
  SELECT balance INTO from_balance
  FROM Accounts
  WHERE account_id = from_account_id
  FOR UPDATE;
  
  IF from_balance < amount THEN
    RAISE insufficient_balance;
  END IF;
  
  UPDATE Accounts
  SET balance = balance - amount
  WHERE account_id = from_account_id;
  
  UPDATE Accounts
  SET balance = balance + amount
  WHERE account_id = to_account_id;
  
  COMMIT;
  DBMS_OUTPUT.PUT_LINE('Transfer successful: ' || amount || ' transferred from account ' || from_account_id || ' to account ' || to_account_id);

EXCEPTION
  WHEN insufficient_balance THEN
    DBMS_OUTPUT.PUT_LINE('Error: Insufficient balance in account ' || from_account_id);
    ROLLBACK;
  WHEN NO_DATA_FOUND THEN
    DBMS_OUTPUT.PUT_LINE('Error: One of the accounts not found.');
    ROLLBACK;
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('Unexpected error: ' || SQLERRM);
    ROLLBACK;
END;
/

SET SERVEROUTPUT ON;

BEGIN
  ProcessMonthlyInterest;
END;
/

BEGIN
  UpdateEmployeeBonus(10, 10);
END;
/

BEGIN
  TransferFunds(101, 103, 500);
END;
/
