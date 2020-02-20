package com.enigma.repositories;

import com.enigma.entities.Addresses;
import com.enigma.entities.Fee;
import com.enigma.entities.Locations;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationsRepository extends JpaRepository<Locations, Integer> {
    Locations findByAddressesOrigin(Addresses addresses);
}
