package com.enigma.services.impl;

import com.enigma.entities.Storages;
import com.enigma.exception.DataNotFound;
import com.enigma.exception.IdNotFoundException;
import com.enigma.repositories.StoragesRepository;
import com.enigma.services.StoragesService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class StoragesServiceImpl implements StoragesService {

    @Autowired
    StoragesRepository storagesRepository;

    @Override
    public Storages createStorages(Storages storages) {
        return storagesRepository.save(storages);
    }

    @Override
    public List<Storages> getAllStorages() {
        return storagesRepository.findAll();
    }

    @Override
    public Storages getStoragesById(Integer id) {
//        if (!(storagesRepository.findById(id).isPresent())){
//            throw new DataNotFound();
//        }
        Storages storages = storagesRepository.findById(id).get();
        if (storages == null) throw new IdNotFoundException();
        return storages;

    }

    @Override
    public Storages updateStorages(Storages storages) {
        return storagesRepository.save(storages);
    }

    @Override
    public void deleteStoragesById(Integer id) {
        storagesRepository.deleteById(id);
    }


}
