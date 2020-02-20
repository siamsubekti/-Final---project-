package com.enigma.services;

import com.enigma.entities.Posts;

import java.util.List;

public interface PostsService {
    Posts createPosts(Posts posts);
    List<Posts> getAllPosts();
    Posts getPostById(String id);
    Posts updatePosts(Posts posts);
    void deletePostsById(String id);
}
