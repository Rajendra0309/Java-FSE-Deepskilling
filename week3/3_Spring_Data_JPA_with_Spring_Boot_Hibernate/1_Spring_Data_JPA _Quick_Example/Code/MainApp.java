package com.library;

import com.library.model.Book;
import com.library.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MainApp implements CommandLineRunner {

    @Autowired
    private BookRepository bookRepository;

    public static void main(String[] args) {
        SpringApplication.run(MainApp.class, args);
    }

    @Override
    public void run(String... args) {
        Book book1 = new Book();
        book1.setTitle("Spring in Action");
        book1.setAuthor("Craig Walls");

        Book book2 = new Book();
        book2.setTitle("Effective Java");
        book2.setAuthor("Joshua Bloch");

        bookRepository.save(book1);
        bookRepository.save(book2);

        System.out.println("All Books:");
        bookRepository.findAll().forEach(System.out::println);
    }
}
