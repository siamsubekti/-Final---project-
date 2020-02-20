package com.enigma.services.impl;

import com.enigma.entities.Packages;
import com.enigma.exception.DataExistException;
import com.enigma.exception.DataNotFound;
import com.enigma.exception.DataNullException;
import com.enigma.repositories.PackagesRepository;
import com.enigma.services.PackagesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;

import java.util.List;

public class PackagesServiceImpl implements PackagesService {
    @Autowired
    PackagesRepository packagesRepository;

    @Override
    public Packages createPackages(Packages packages) {
        if (StringUtils.isEmpty(packages.getItemName())){
            throw new DataNullException();
        }
        return packagesRepository.save(packages);
    }

    @Override
    public List<Packages> getAllPackages() {
        return packagesRepository.findAll();
    }

    @Override
    public Packages getPackagesById(String id) {
        if (!(packagesRepository.findById(id).isPresent())){
            throw  new DataNotFound();
        }
        return packagesRepository.findById(id).get();
    }

    @Override
    public void deleteById(String id) {
        packagesRepository.deleteById(id);
    }

    @Override
    public Packages updatePackages(Packages packages) {
        return packagesRepository.save(packages);
    }
}
