package com.enigma.controller;

import com.enigma.entities.Packages;
import com.enigma.repositories.PackagesRepository;
import com.enigma.services.PackagesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class PackagesController {

    @Autowired
    PackagesService packagesService;

    @Autowired
    PackagesRepository packagesRepository;

    @PostMapping("/packages")
    public ResponseEntity<Packages> createPackages(@RequestBody Packages packages){
        try {
            return new ResponseEntity<>(packagesService.createPackages(packages), HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

    }

    @GetMapping("/packages")
    public ResponseEntity<List<Packages>> getListPackages(){

        try {
            return new ResponseEntity<>(packagesService.getAllPackages(), HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/packages/{id}")
    public ResponseEntity<Packages> getPackagesById(@PathVariable String id){
        try {
            return new ResponseEntity<>(packagesService.getPackagesById(id), HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    @DeleteMapping("/packages/{id}")
    public void deletePackagesById(@PathVariable String id){
        packagesService.deleteById(id);
    }

    @PutMapping("/packages")
    public Packages updatePackages(@RequestBody Packages packages){
        return packagesService.updatePackages(packages);
    }
}
