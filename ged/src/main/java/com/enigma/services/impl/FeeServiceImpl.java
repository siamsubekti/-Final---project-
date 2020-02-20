package com.enigma.services.impl;

import com.enigma.entities.Addresses;
import com.enigma.entities.Fee;
import com.enigma.entities.Locations;
import com.enigma.exception.DataNotFound;
import com.enigma.repositories.FeeRepository;
import com.enigma.services.FeeService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class FeeServiceImpl implements FeeService {

    @Autowired
    FeeRepository feeRepository;

    @Override
    public Fee createFee(Fee fee) {
        return feeRepository.save(fee);
    }

    @Override
    public List<Fee> getAllFee() {
        return feeRepository.findAll();
    }

    @Override
    public Fee updateFee(Fee fee) {
        return feeRepository.save(fee);
    }

    @Override
    public void deleteFeeByid(Integer id) {
        feeRepository.deleteById(id);
    }

    @Override
    public Fee getFeeById(Integer id) {
        if (!(feeRepository.findById(id).isPresent())){
            throw new DataNotFound();
        }
        return feeRepository.findById(id).get();
    }

    @Override
    public Fee findByOriginLocationAndDestinationLocation(Locations originAddress, Locations destinationAddresses) {
        return feeRepository.findByOriginLocationAndDestinationLocation(originAddress, destinationAddresses);
    }

}
