package com.enigma.services;

import com.enigma.entities.Roles;

import java.util.List;

public interface RolesService {
    List<Roles> getAllRoles();
    Roles createRole(Roles roles);
    Roles findByIdRole (Integer id) throws Exception;
//    Roles findByUserRoles(List<Roles> users);
    void delete (Integer id);
    Roles findByNameRole(String roles);
}
