package com.example.myapp.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class ApiController {

    @GetMapping("/greeting")
    public Map<String, String> getGreeting() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Hello from Spring Boot!");
        return response;
    }
}