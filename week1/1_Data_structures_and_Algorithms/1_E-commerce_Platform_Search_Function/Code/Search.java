package com.week1.AlgorithmsDataStructures;

public class Search {
    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "iPhone", "Electronics"),
            new Product(2, "TV", "Electronics"),
            new Product(3, "Wallet", "Accessories"),
            new Product(4, "Speaker", "Electronics"),
            new Product(5, "Shoes", "Footwear")
        };

        String searchTerm = "wallet";

        System.out.println("\nLinear Search Result:");
        Product result1 = LinearSearch.linearSearch(products, searchTerm);
        System.out.println(result1 != null ? result1 : "Product not found");

        System.out.println("\nBinary Search Result:");
        Product result2 = BinarySearch.binarySearch(products, searchTerm);
        System.out.println(result2 != null ? result2 : "Product not found");
    }
}