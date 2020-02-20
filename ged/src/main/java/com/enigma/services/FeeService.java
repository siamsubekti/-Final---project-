package com.enigma.services;

import com.enigma.entities.Addresses;
import com.enigma.entities.Fee;
import com.enigma.entities.Locations;

import java.util.List;

public interface FeeService {
    Fee createFee(Fee fee);
    List<Fee> getAllFee();
    Fee updateFee(Fee fee);
    void deleteFeeByid(Integer id);
    Fee getFeeById(Integer id);

    Fee findByOriginLocationAndDestinationLocation(Locations originAddress, Locations destinationAddress);
}
