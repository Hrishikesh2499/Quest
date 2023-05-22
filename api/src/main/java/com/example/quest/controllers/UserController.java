package com.example.quest.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.quest.responses.ResponseHandler;

@RestController
@RequestMapping("/user")
public class UserController {

    @GetMapping("/")
    public ResponseEntity<Object> getAllUsers() {
        try {
            return ResponseHandler.generateResponse("Users retrived successfully", HttpStatus.OK, null);
        } catch (Exception e) {
            return ResponseHandler.generateResponse(e.getMessage(), HttpStatus.OK, null);

        }
    }

}
