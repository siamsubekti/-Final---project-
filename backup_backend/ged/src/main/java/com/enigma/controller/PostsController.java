package com.enigma.controller;

import com.enigma.entities.Posts;
import com.enigma.services.PostsService;
import javafx.geometry.Pos;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class PostsController {

    @Autowired
    PostsService postsService;

    @PostMapping("/posts")
    public ResponseEntity<Posts> createPosts(@RequestBody Posts posts){

        try {
            return new ResponseEntity<>(postsService.createPosts(posts), HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/posts")
    public ResponseEntity<List<Posts>> getAllPosts(){
        try {
            return new ResponseEntity<>(postsService.getAllPosts(), HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    @GetMapping("/posts/{id}")
    public ResponseEntity<Posts> getPostsById(@PathVariable String id){
        try {
            return new ResponseEntity<>(postsService.getPostById(id), HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    @PutMapping("/posts")
    public ResponseEntity<Posts> updatePosts(@RequestBody Posts posts){
        try {
            return new ResponseEntity<>(postsService.updatePosts(posts), HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

    }

    @DeleteMapping("/posts")
    public void deletePostsById(@PathVariable String id){
        postsService.deletePostsById(id);
    }
}
