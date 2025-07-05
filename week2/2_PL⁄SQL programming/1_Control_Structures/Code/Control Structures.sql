CREATE TABLE CUSTOMERS (
    CustomerID   NUMBER PRIMARY KEY,
    Name         VARCHAR2(50),
    Age          NUMBER,
    Balance      NUMBER(10, 2),
    IsVIP        VARCHAR2(5)
);

CREATE TABLE LOANS (
    LoanID       NUMBER PRIMARY KEY,
    CustomerID   NUMBER,
    InterestRate NUMBER(5, 2),
    DueDate      DATE,
    FOREIGN KEY (CustomerID) REFERENCES CUSTOMERS(CustomerID)
);


INSERT INTO CUSTOMERS VALUES (1, 'Alice', 65, 15000, 'FALSE');
INSERT INTO CUSTOMERS VALUES (2, 'Bob', 45, 8000, 'FALSE');
INSERT INTO CUSTOMERS VALUES (3, 'Charlie', 70, 20000, 'FALSE');
INSERT INTO CUSTOMERS VALUES (4, 'David', 30, 5000, 'FALSE');
INSERT INTO CUSTOMERS VALUES (5, 'Eva', 62, 9500, 'FALSE');

INSERT INTO LOANS VALUES (101, 1, 8.5, SYSDATE + 10); 
INSERT INTO LOANS VALUES (102, 2, 7.0, SYSDATE + 40);
INSERT INTO LOANS VALUES (103, 3, 9.0, SYSDATE + 20);
INSERT INTO LOANS VALUES (104, 4, 6.5, SYSDATE + 5);  
INSERT INTO LOANS VALUES (105, 5, 7.5, SYSDATE + 60);   


--Scenario 1
DECLARE
  CURSOR cur_loans IS
    SELECT l.LoanID, l.InterestRate
    FROM LOANS l
    JOIN CUSTOMERS c ON l.CustomerID = c.CustomerID
    WHERE c.Age > 60;

BEGIN
  FOR rec IN cur_loans LOOP
    UPDATE LOANS
    SET InterestRate = InterestRate - 1
    WHERE LoanID = rec.LoanID;
  END LOOP;

  COMMIT;
END;


--Scenario 2
DECLARE
  CURSOR cur_customers IS
    SELECT CustomerID
    FROM CUSTOMERS
    WHERE Balance > 10000;

BEGIN
  FOR rec IN cur_customers LOOP
    UPDATE CUSTOMERS
    SET IsVIP = 'TRUE'
    WHERE CustomerID = rec.CustomerID;
  END LOOP;

  COMMIT;
END;


--Scenario 3
DECLARE
  CURSOR cur_due_loans IS
    SELECT l.LoanID, c.Name, l.DueDate
    FROM LOANS l
    JOIN CUSTOMERS c ON l.CustomerID = c.CustomerID
    WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE + 30;

BEGIN
  FOR rec IN cur_due_loans LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Loan ' || rec.LoanID || 
                         ' for customer ' || rec.Name || 
                         ' is due on ' || TO_CHAR(rec.DueDate, 'DD-MON-YYYY'));
  END LOOP;
END;