package com.enigma.services;

import com.enigma.entities.Packages;

import java.util.List;

public interface PackagesService {
    Packages createPackages(Packages packages) throws Exception;
    List<Packages> getAllPackages();
    Packages getPackagesById(String id);
    void deleteById(String id);
    Packages updatePackages(Packages packages);
}
