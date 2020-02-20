package com.enigma.repositories;

import com.enigma.entities.Posts;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostsRepository extends JpaRepository<Posts, String> {
}
