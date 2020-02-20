package com.enigma.controller;

import com.enigma.entities.Addresses;
import com.enigma.services.AddressesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class AddressesController {

    @Autowired
    AddressesService addressesService;

    @PostMapping("/addresses")
    public ResponseEntity<Addresses> createAddresses(@RequestBody Addresses addresses){
        try {
            return new ResponseEntity<>(addressesService.createAddresses(addresses), HttpStatus.CREATED);
        } catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/addresses")
    public ResponseEntity<List<Addresses>> getAllAddresses(){
        try {
            return new ResponseEntity<>(addressesService.getAllAddresses(), HttpStatus.OK);
        }catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.REQUEST_TIMEOUT);
        }
    }

    @PutMapping("/addresses")
    public ResponseEntity<Addresses> updateAddresses(@RequestBody Addresses addresses){
        try {
            return new ResponseEntity<>(addressesService.updateAddresses(addresses), HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/addresses/{id}")
    public void deleteAddressesById(@PathVariable Integer id){
        addressesService.deleteAddressesById(id);
    }

    @GetMapping("/addresses/{id}")
    Addresses findAddressesById(@PathVariable Integer id){
        return addressesService.getAddressesById(id);
    }
}
