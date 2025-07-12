package com.cognizant.springcountryweb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringcountrywebApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringcountrywebApplication.class, args);
		System.out.println("Spring Country Web Application is running on port 8081");
	}

}
