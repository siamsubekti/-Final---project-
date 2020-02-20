package com.enigma.services;

import com.enigma.entities.Roles;
import com.enigma.entities.User;
//import com.enigma.security.MyUsersDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.List;

public interface UsersService {
    List<User> findAll();
    User createUsers(User newUser);
    User findByIdUsers (String id) throws Exception;
    List<User> findByRoleCourier(Integer id);
    User editUsers(User user);
    void delete (String id);
    List<User> findByUserNameOrEmail(String search);
    List<User> findByRolesCourierAndName(String id, String name);

}
