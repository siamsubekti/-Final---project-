package com.enigma.controller;

import com.enigma.entities.User;
import com.enigma.services.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(value = "*", maxAge = 3600)
@RestController
@RequestMapping("/users")
public class UsersController {

    @Autowired
    UsersService usersService;

    @GetMapping("")
    public List<User> getAllUsers(){
        return usersService.findAll();
    }

    @PostMapping("")
    public User createUsers(@RequestBody User user){
        return usersService.createUsers(user);
    }

    @GetMapping("/{id}")
    public User findByIdUsers(@PathVariable String id) throws Exception {
        return usersService.findByIdUsers(id);
    }

    @GetMapping("/search")
    public List<User> findByUsernameOrEmail(@RequestParam(value = "value") String keyword) {
        return usersService.findByUserNameOrEmail(keyword);
    }

    @PatchMapping("/{id}")
    public User UpdateUsers(@PathVariable User user) {

        return usersService.editUsers(user);
    }

    @DeleteMapping("/{id}")
    public void deleteIdUsers(@PathVariable String id){
        usersService.delete(id);
    }


}
