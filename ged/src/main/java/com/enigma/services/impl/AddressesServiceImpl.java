package com.enigma.services.impl;

import com.enigma.entities.Addresses;
import com.enigma.entities.Locations;
import com.enigma.entities.Transactions;
import com.enigma.exception.DataNotFound;
import com.enigma.exception.DataNullException;
import com.enigma.repositories.AddressesRepository;
import com.enigma.services.AddressesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;

import java.util.List;

public class AddressesServiceImpl implements AddressesService {

    @Autowired
    AddressesRepository addressesRepository;

    @Autowired
    AddressesService addressesService;

    @Override
    public Addresses createAddresses(Addresses addresses) {
        if (StringUtils.isEmpty(addresses)){
            throw new DataNullException();
        }
        return addressesRepository.save(addresses);
    }

    @Override
    public List<Addresses> getAllAddresses() {
        return addressesRepository.findAll();
    }

    @Override
    public Addresses updateAddresses(Addresses addresses) {
        return addressesRepository.save(addresses);
    }

    @Override
    public void deleteAddressesById(Integer id) {
        addressesRepository.deleteById(id);
    }

    @Override
    public Addresses getAddressesById(Integer id) {
        if (!(addressesRepository.findById(id).isPresent())){
            throw new DataNotFound();
        }
        return addressesRepository.findById(id).get();
    }

}
