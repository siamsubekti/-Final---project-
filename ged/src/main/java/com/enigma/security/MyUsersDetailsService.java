package com.enigma.security;

import com.enigma.entities.User;
import com.enigma.entities.UsersPrincipal;
import com.enigma.repositories.UsersRepository;
import com.enigma.services.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUsersDetailsService implements UserDetailsService {

    @Autowired
    UsersService usersService;

    @Autowired
    UsersRepository repository;

    @Override
    public UsersPrincipal loadUserByUsername(String userName) throws UsernameNotFoundException {
        User user = repository.findByUserName(userName);
        UsersPrincipal usersPrincipal = new UsersPrincipal(user);
        return usersPrincipal;
    }
}
