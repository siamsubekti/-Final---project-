package com.enigma.controller;

import com.enigma.entities.Locations;
import com.enigma.services.LocationsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class LocationsController {
    @Autowired
    LocationsService locationsService;

    @GetMapping("/locations")
    public List<Locations> getAllLocations(){
        return locationsService.findAllLocations();

    }

    @PostMapping("/locations")
    public ResponseEntity<Locations> createLocations(@RequestBody Locations locations) {
       try {
           return new ResponseEntity<>(locationsService.createLocations(locations), HttpStatus.CREATED);
       }catch (Exception e){
           return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
       }
    }

}
