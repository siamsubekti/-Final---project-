package com.enigma.services.impl;

import com.enigma.entities.Posts;
import com.enigma.exception.DataNotFound;
import com.enigma.repositories.PostsRepository;
import com.enigma.services.PostsService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class PostsServiceImpl implements PostsService {

    @Autowired
    PostsRepository postsRepository;

    @Override
    public Posts createPosts(Posts posts) {
        return postsRepository.save(posts);
    }

    @Override
    public List<Posts> getAllPosts() {
        return postsRepository.findAll();
    }

    @Override
    public Posts getPostById(String id) {
        if (!(postsRepository.findById(id).isPresent())){
            throw new DataNotFound();
        }
        return postsRepository.findById(id).get();
    }

    @Override
    public Posts updatePosts(Posts posts) {
        return postsRepository.save(posts);
    }

    @Override
    public void deletePostsById(String id) {
        postsRepository.deleteById(id);
    }
}
