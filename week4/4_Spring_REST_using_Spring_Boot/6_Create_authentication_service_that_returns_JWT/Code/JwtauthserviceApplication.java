package com.cognizant.jwtauthservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JwtauthserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(JwtauthserviceApplication.class, args);
		System.out.println("JWT Auth Service is running on port 8081");
	}

}
