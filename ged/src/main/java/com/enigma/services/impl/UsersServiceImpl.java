package com.enigma.services.impl;

import com.enigma.constant.UsersConstant;
import com.enigma.entities.User;
import com.enigma.exception.DataExistException;
import com.enigma.exception.DataNullException;
import com.enigma.exception.IdNotFoundException;
import com.enigma.repositories.UsersRepository;
import com.enigma.services.RolesService;
import com.enigma.services.UsersService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class UsersServiceImpl implements UsersService {

    @Autowired
    UsersRepository usersRepository;

    @Autowired
    UsersService usersService;

    @Autowired
    RolesService rolesService;

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
         return usersRepository.findById(id).get();

    }

    @Override
    public List<User> findByRoleCourier(Integer id){
        return usersRepository.findByRoles_Id(UsersConstant.COURIER_ID);
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

    @Override
    public List<User> findByRolesCourierAndName(String id, String name) {
        return usersRepository.findByRoles_IdAndUserName(id, name);
    }
}
