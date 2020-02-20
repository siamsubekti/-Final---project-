package com.enigma.repositories;

import com.enigma.entities.Roles;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RolesRepository extends JpaRepository<Roles, Integer> {
//    Roles findByUsersRoleList(List<Roles> users);
    Roles findByRoleName(String roles);
}
