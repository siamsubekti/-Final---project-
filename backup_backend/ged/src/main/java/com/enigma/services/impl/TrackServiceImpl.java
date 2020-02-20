package com.enigma.services.impl;

import com.enigma.constant.MessageStatus;
import com.enigma.constant.MessageTrackFinish;
import com.enigma.entities.*;
import com.enigma.exception.DataNotFound;
import com.enigma.repositories.TrackRepository;
import com.enigma.services.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;
import java.util.List;

public class TrackServiceImpl implements TrackService {

    @Autowired
    TrackRepository trackRepository;

    @Autowired
    TransactionsService transactionsService;

    @Autowired
    UsersService usersService;

    @Autowired
    StoragesService storagesService;

    @Autowired
    AddressesService addressesService;

    @Autowired
    LocationsService locationsService;

    @Override
    public Track updateTracking(Track track) throws Exception {
        Transactions transactions = transactionsService.findByTransactionId(track.getListTransactions().getId());
        User user = usersService.findByIdUsers(track.getUser().getId());
        Storages storages = storagesService.getStoragesById(track.getStorage().getId());
        Storages finishToAddress = storagesService.getStoragesById(MessageTrackFinish.FINISH);
        track.setTime(new Date(System.currentTimeMillis()));
        track.setListTransactions(transactions);
        track.setUser(user);
        track.setStorage(storages);
            if (transactions.getDestinationAddresses().getAddressLocations().equals(storages.getStorageAddress().getAddressLocations())){
                track.getListTransactions().setStatus(MessageStatus.DELIVERED);
            } else if(track.getStorage().getId().equals(finishToAddress)){
                track.getListTransactions().setStatus(MessageStatus.DELIVERED);
            } else if (track.getFinish().equalsIgnoreCase(MessageTrackFinish.OK)){
                track.getListTransactions().setStatus(MessageStatus.DELIVERED);
            }
        return trackRepository.save(track);
    }

    @Override
    public List<Track> getAllTracking() {
        return trackRepository.findAll();
    }

    @Override
    public Track getTrackingById(String id) {
        if (!(trackRepository.findById(id).isPresent())){
            throw new DataNotFound();
        }
        return trackRepository.findById(id).get();
    }

    @Override
    public void deleteTrackingById(String id) {
        trackRepository.deleteById(id);
    }
}
