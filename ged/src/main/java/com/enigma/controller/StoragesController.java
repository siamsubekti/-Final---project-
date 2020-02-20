package com.enigma.controller;

import com.enigma.entities.Storages;
import com.enigma.services.StoragesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class StoragesController {

    @Autowired
    StoragesService storagesService;

    @PostMapping("/storages")
    public ResponseEntity<Storages> createStorages(@RequestBody Storages storages){
        try {
            return new ResponseEntity<>(storagesService.createStorages(storages), HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

    }

    @GetMapping("/storages")
    public List<Storages> getListStorages(){
        return storagesService.getAllStorages();

    }

    @GetMapping("/storages/{id}")
    public Storages getStoragesById(@PathVariable Integer id){
        return storagesService.getStoragesById(id);
    }

    @PutMapping("/storages")
    public Storages updateStorages(@RequestBody Storages storages){
        return storagesService.updateStorages(storages);
    }

    @DeleteMapping("/storages/{id}")
    public void deleteStorages(@PathVariable Integer id){
        storagesService.deleteStoragesById(id);
    }
}
