package com.enigma.repositories;

import com.enigma.entities.Addresses;
import com.enigma.entities.Locations;
import com.enigma.entities.Transactions;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressesRepository extends JpaRepository<Addresses, Integer> {
    Addresses findByAddressLocations(Transactions transactions);
}
