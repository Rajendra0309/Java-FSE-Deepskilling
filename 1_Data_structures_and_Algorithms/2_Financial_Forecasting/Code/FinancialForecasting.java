package com.week1.AlgorithmsDataStructures;

public class FinancialForecasting {

    public static double forecastRecursive(double baseValue, double growthRate, int years) {
        if (years == 0) return baseValue;
        return forecastRecursive(baseValue, growthRate, years - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {
        double baseValue = 10000.0;   
        double growthRate = 0.10;    
        int years = 5;                

        double futureValue = forecastRecursive(baseValue, growthRate, years);
        System.out.printf("\nPredicted revenue after %d years: ₹%.2f%n\n", years, futureValue);
    }
}