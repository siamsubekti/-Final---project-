package com.enigma.controller;

import com.enigma.entities.Roles;
import com.enigma.services.RolesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class RolesController {

    @Autowired
    RolesService rolesService;

    @GetMapping("/roles")
    public ResponseEntity<List<Roles>> getListRoles(){

        try {
            return new ResponseEntity<>(rolesService.getAllRoles(), HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/roles")
    public ResponseEntity<Roles> createRoles(@RequestBody Roles roles) {

        try {
            return new ResponseEntity<>(rolesService.createRole(roles), HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/roles/{id}")
    public ResponseEntity<Roles> findById(@PathVariable Integer id) throws Exception {
        try {
            return new ResponseEntity<>(rolesService.findByIdRole(id), HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    @DeleteMapping("/roles/{id}")
    public void deleteIdRole(@PathVariable Integer id) {

    }
}
