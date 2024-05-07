package com.MyTest.TestBackend.controller;

import com.MyTest.TestBackend.model.User;
import com.MyTest.TestBackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {

    @Autowired //injecting userRepository

    private UserRepository userRepository; // create object of user repository

    @PostMapping("/user")//for push the data

        //passing the json body
    User newuser(@RequestBody User newuser){

       return userRepository.save(newuser); // give userRepository object
    }

    //get the user data
    @GetMapping("/getuser")
    List<User> getAllUsers(){
        return userRepository.findAll();
    }
}
