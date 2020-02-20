package com.enigma.services.impl;

import com.enigma.entities.Roles;
import com.enigma.exception.IdNotFoundException;
import com.enigma.repositories.RolesRepository;
import com.enigma.services.RolesService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class RoleServiceImpl implements RolesService {

    @Autowired
    RolesRepository rolesRepository;

    @Autowired
    RolesService rolesService;

    @Override
    public List<Roles> getAllRoles() {
        return rolesRepository.findAll();
    }

    @Override
    public Roles createRole(Roles roles) {
        return rolesRepository.save(roles);
    }

    @Override
    public Roles findByIdRole(Integer id) throws Exception {
        Roles roles = rolesRepository.findById(id).get();
        if (roles == null) {
            throw new IdNotFoundException();
        }
        return roles;
    }

    @Override
    public void delete(Integer id) {
        rolesRepository.deleteById(id);
    }

    @Override
    public Roles findByNameRole(String roles) {
        return rolesRepository.findByRoleName(roles);
    }


}
