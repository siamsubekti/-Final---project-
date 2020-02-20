package com.enigma.repositories;

import com.enigma.entities.Locations;
import com.enigma.entities.Transactions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TransactionsRepository extends JpaRepository<Transactions, String> {
    Transactions findByDestinationAddresses_AddressLocations(Locations transactions);
//    Transactions findByOriginName(String name);
//    @Query("select transactions from Transactions transactions where transactions.originName LIKE %?1%")
    List<Transactions> findByOriginNameLike(String name);

}
