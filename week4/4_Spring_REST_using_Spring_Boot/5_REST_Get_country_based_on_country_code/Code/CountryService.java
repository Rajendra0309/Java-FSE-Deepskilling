package com.cognizant.springcountrycode.service;
import java.util.List;

import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import com.cognizant.springcountrycode.model.Country;

@Service
public class CountryService {

    public Country getCountry(String code) {
        try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("country.xml")) {
            @SuppressWarnings("unchecked")
            List<Country> countries = (List<Country>) context.getBean("countryList");

            return countries.stream()
                    .filter(c -> c.getCode().equalsIgnoreCase(code))
                    .findFirst()    
                    .orElse(null);
        }
    }
}
