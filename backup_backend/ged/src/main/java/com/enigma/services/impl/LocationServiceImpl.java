package com.enigma.services.impl;

import com.enigma.entities.Addresses;
import com.enigma.entities.Fee;
import com.enigma.entities.Locations;
import com.enigma.repositories.LocationsRepository;
import com.enigma.services.LocationsService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class LocationServiceImpl implements LocationsService {

    @Autowired
    LocationsRepository locationsRepository;

    @Override
    public List<Locations> findAllLocations() {
        return locationsRepository.findAll();
    }

    @Override
    public Locations createLocations(Locations locations) {
        return locationsRepository.save(locations);
    }

    @Override
    public Locations findById(Integer id) {
        return locationsRepository.findById(id).get();
    }

    @Override
    public Locations findByAddressLocation(Addresses addresses) {
        return locationsRepository.findByAddressesOrigin(addresses);
    }
}
