package com.enigma.services;

import com.enigma.entities.Addresses;
import com.enigma.entities.Locations;
import com.enigma.entities.Transactions;

import java.util.List;

public interface AddressesService {
    Addresses createAddresses(Addresses addresses);
    List<Addresses> getAllAddresses();
    Addresses updateAddresses(Addresses addresses);
    void deleteAddressesById(Integer id);
    Addresses getAddressesById(Integer id);
}
