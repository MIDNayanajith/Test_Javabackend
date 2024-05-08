package com.MyTest.TestBackend.controller;

import com.MyTest.TestBackend.exception.UserNotFoundException;
import com.MyTest.TestBackend.model.User;
import com.MyTest.TestBackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000") //give frontend url
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

    @GetMapping("/getuser/{id}") //this route for get user by id

    User getUserById(@PathVariable Long id){
        return userRepository.findById(id)
                .orElseThrow(()->new UserNotFoundException(id));//this one is exception handling
    }
}
