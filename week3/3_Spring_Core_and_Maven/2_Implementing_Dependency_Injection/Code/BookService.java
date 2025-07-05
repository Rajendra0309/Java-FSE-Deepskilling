package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        System.out.println("Setter called: Injecting BookRepository");
        this.bookRepository = bookRepository;
    }

    public void addBook(String bookName) {
        System.out.println("BookService: Adding book...");
        bookRepository.saveBook(bookName);
    }
}
