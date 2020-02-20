package com.enigma.services.impl;

import com.enigma.constant.MessageStatus;
import com.enigma.entities.*;
import com.enigma.exception.DataAccessException;
import com.enigma.exception.DataNotFound;
import com.enigma.repositories.TransactionsRepository;
import com.enigma.services.*;
import org.springframework.beans.factory.annotation.Autowired;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

public class TransactionsServiceImpl implements TransactionsService {


    @Autowired
    TransactionsRepository transactionsRepository;

    @Autowired
    FeeService feeService;

    @Autowired
    PackagesService packagesService;

    @Autowired
    LocationsService locationsService;

    @Autowired
    AddressesService addressesService;

    @Autowired
    UsersService usersService;

    @Autowired
    RolesService rolesService;

    @Override
    public List<Transactions> findAllTransactions() {
        return transactionsRepository.findAll();
    }

    @Override
    public Transactions findByTransactionId(String id) {
        if (id.isEmpty()){
            throw new DataNotFound();
        }
        return transactionsRepository.findById(id).get();
    }

    @Override
    public Transactions findByDestinationAddresses_AddressLocations(Locations transactions) {
        return transactionsRepository.findByDestinationAddresses_AddressLocations(transactions);
    }

    @Override
    public List<Transactions> findByOriginName(String name) {
        return transactionsRepository.findByOriginNameLike(name);
    }

//    @Override
//    public Transactions findIdTrxByUsername(String name) {
//        return transactionsRepository.findByOriginName(name);
//    }

    @Override
    public Transactions createTransaction(Transactions transactions) throws Exception {
        User user = usersService.findByIdUsers(transactions.getOperator().getId());
        Roles role = rolesService.findByIdRole(1);
        Roles role2 = rolesService.findByIdRole(2);
                if (user.getRoles().equals(role) || user.getRoles().equals(role2)) {
                    Packages packages = extractPackages(transactions);
                    Addresses addressesOr = extractAddressesOrigin(transactions);
                    Addresses addressesDe = extractAddressesDestination(transactions);
                    Locations locationsOrigin = locationsService.findByAddressLocation(addressesOr);
                    Locations locationsDestination = locationsService.findByAddressLocation(addressesDe);
                    Fee fee = feeService.findByOriginLocationAndDestinationLocation(locationsOrigin, locationsDestination);
                    if (packages.getWeight() < 2) {
                        transactions.setTotalPrice(new BigDecimal(10000).add(fee.getValue()));
                    } else if (packages.getWeight() >=2) {
                        transactions.setTotalPrice(new BigDecimal(20000).add(fee.getValue()));
                    }
                    ExtractSetTransaction(transactions, user, packages, addressesOr, addressesDe);
                    return transactionsRepository.save(transactions);
        }
        throw new DataAccessException();
    }

    public void ExtractSetTransaction(Transactions transactions, User user, Packages packages, Addresses addressesOr, Addresses addressesDe) {
        transactions.setOriginName(transactions.getOriginName());
        transactions.setDestinationName(transactions.getDestinationName());
        transactions.setStatus(MessageStatus.SHIPPED);
        transactions.setCreateTime(new Date(System.currentTimeMillis()));
        transactions.setOperator(user);
        transactions.setPackages(packages);
        transactions.setOriginAddress(addressesOr);
        transactions.setDestinationAddresses(addressesDe);
    }


    public Addresses extractAddressesOrigin(Transactions transactions) {
        Addresses addresses = addressesService.createAddresses(transactions.getOriginAddress());
        addresses.setLatitude(transactions.getOriginAddress().getLatitude());
        addresses.setLongitude(transactions.getOriginAddress().getLongitude());
        for (Locations locations : locationsService.findAllLocations()){
            if (locations.getId().equals(addresses.getAddressLocations())) {
                extractLocationOrigin(addresses, locations);
                }
            }
            return addresses;
        }

    public void extractLocationOrigin(Addresses addresses, Locations locations) {
        for (Fee fee : feeService.getAllFee()){
            if (fee.getOriginLocation().equals(addresses.getListOriginAddress())){
                Locations locations1 = fee.getOriginLocation();
                locations.setName(locations1.getName());
                locations.setLocationType(locations1.getLocationType());
                addresses.setAddressLocations(locations1);
            }
        }
    }

    public Addresses extractAddressesDestination(Transactions transactions) {
        Addresses addresses = addressesService.createAddresses(transactions.getDestinationAddresses());
        addresses.setLatitude(transactions.getDestinationAddresses().getLatitude());
        addresses.setLongitude(transactions.getDestinationAddresses().getLongitude());
        for (Locations locations : locationsService.findAllLocations()){
            if (locations.getId().equals(addresses.getAddressLocations())) {
                extractLocationDestination(addresses);
                }
            }
            return addresses;
        }

    public void extractLocationDestination(Addresses addresses) {
        for (Fee fee : feeService.getAllFee()){
            if (fee.getDestinationLocation().equals(addresses.getAddressLocations())){
                Locations locations2 = fee.getDestinationLocation();
                addresses.setAddressLocations(locations2);
            }
        }
    }

    public Packages extractPackages(Transactions transactions) throws Exception {
        Packages packages = packagesService.createPackages(transactions.getPackages());
        packages.setItemName(transactions.getPackages().getItemName());
        packages.setWeight(transactions.getPackages().getWeight());
        return packages;
    }
}
