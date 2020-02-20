package com.enigma.repositories;

import com.enigma.entities.Addresses;
import com.enigma.entities.Fee;
import com.enigma.entities.Locations;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface FeeRepository extends JpaRepository<Fee, Integer> {
    Fee findByOriginLocationAndDestinationLocation(Locations origin, Locations destination);
}
