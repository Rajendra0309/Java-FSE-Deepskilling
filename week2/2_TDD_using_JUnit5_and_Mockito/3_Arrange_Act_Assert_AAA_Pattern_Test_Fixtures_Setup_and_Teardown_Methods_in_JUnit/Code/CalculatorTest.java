package com.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup completed.");
    }

    @After
    public void tearDown() {
        calculator = null;
        System.out.println("Teardown completed.");
    }

    @Test
    public void testAddition() {
        int result = calculator.add(2, 3);
        assertEquals(5, result);
        System.out.println(result);
    }

    @Test
    public void testSubtraction() {
        int result = calculator.subtract(10, 4);
        assertEquals(6, result);
        System.out.println(result);
    }
}