package com.enigma.services;

import com.enigma.entities.Addresses;
import com.enigma.entities.Fee;
import com.enigma.entities.Locations;

import java.util.List;

public interface LocationsService {
    List<Locations> findAllLocations();
    Locations createLocations(Locations locations);
    Locations findById(Integer id);
    Locations findByAddressLocation(Addresses addresses);
}
