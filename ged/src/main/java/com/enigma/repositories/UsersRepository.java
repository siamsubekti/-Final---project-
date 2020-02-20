package com.enigma.repositories;

import com.enigma.entities.Roles;
import com.enigma.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UsersRepository extends JpaRepository<User, String> {
    User findByUserName(String Name);
    User findByRoles(List<Roles> roles);
    List<User> findAllByUserNameLikeOrEmailLike(String name, String email);
    List<User> findByRoles_Id(Integer id);
    List<User> findByRoles_IdAndUserName(String id, String name);


}
