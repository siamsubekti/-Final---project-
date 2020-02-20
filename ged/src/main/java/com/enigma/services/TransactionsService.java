package com.enigma.services;

import com.enigma.entities.Locations;
import com.enigma.entities.Transactions;

import java.util.List;

public interface TransactionsService {
    Transactions createTransaction (Transactions transactions) throws Exception;
    List<Transactions> findAllTransactions();
    Transactions findByTransactionId(String id);
    Transactions findByDestinationAddresses_AddressLocations(Locations transactions);
//    Transactions findIdTrxByUsername(String name);
    List<Transactions> findByOriginName(String name);
}
