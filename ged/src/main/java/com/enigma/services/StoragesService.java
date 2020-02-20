package com.enigma.services;

import com.enigma.entities.Storages;

import java.util.List;

public interface StoragesService {
    Storages createStorages(Storages storages);
    List<Storages> getAllStorages();
    Storages getStoragesById(Integer id);
    Storages updateStorages(Storages storages);
    void deleteStoragesById(Integer id);


}
