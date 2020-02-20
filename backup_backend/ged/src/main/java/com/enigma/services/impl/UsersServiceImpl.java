package com.enigma.services.impl;

import com.enigma.entities.Roles;
import com.enigma.entities.User;
import com.enigma.exception.DataExistException;
import com.enigma.exception.DataNullException;
import com.enigma.exception.IdNotFoundException;
import com.enigma.repositories.UsersRepository;
import com.enigma.services.UsersService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class UsersServiceImpl implements UsersService {

    @Autowired
    UsersRepository usersRepository;

    @Autowired
    UsersService usersService;

    @Override
    public List<User> findAll() {
        return usersRepository.findAll();
    }

    @Override
    public User createUsers(User newUser) {
        for (User user : usersRepository.findAll()) {
            if(user.getUserName().equals(newUser.getUserName()))
                throw new DataExistException();
            if (user.getEmail().equals(newUser.getEmail())){
                throw new DataExistException();
            }
        }
        if (newUser == null) {
            throw new DataNullException();
        }
        return usersRepository.save(newUser);
    }

    @Override
    public User findByIdUsers(String id) throws IdNotFoundException {
        User user = usersRepository.findById(id).get();
        if (user == null) throw  new IdNotFoundException();
        return user;
    }

    @Override
    public User findByRoles(List<Roles> roles) {
        return usersRepository.findByRoles(roles);
    }

    @Override
    public User editUsers(User user) {
        User userOlder = usersRepository.findById(user.getId()).get();
        if (!user.getId().equals(userOlder)){
            throw new IdNotFoundException();
        }
        return usersRepository.save(user);
    }

    @Override
    public void delete(String id) {
        usersRepository.deleteById(id);
    }

    @Override
    public List<User> findByUserNameOrEmail(String search) {
        return usersRepository.findAllByUserNameLikeOrEmailLike(search, search);
    }

}
