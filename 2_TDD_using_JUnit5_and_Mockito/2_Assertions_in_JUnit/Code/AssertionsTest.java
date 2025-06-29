package com.example;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;
import org.junit.Test;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        assertEquals(5, 2 + 3);
        System.out.println("assertEquals passed");

        assertTrue(5 > 3);
        System.out.println("assertTrue passed");

        assertFalse(5 < 3);
        System.out.println("assertFalse passed");

        assertNull(null);
        System.out.println("assertNull passed");

        assertNotNull(new Object());
        System.out.println("assertNotNull passed");
    }
}
