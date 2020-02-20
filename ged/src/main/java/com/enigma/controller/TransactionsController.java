package com.enigma.controller;

import com.enigma.entities.Transactions;
import com.enigma.services.TransactionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class TransactionsController {

    @Autowired
    TransactionsService transactionsService;

    @PostMapping("/transactions")
    public Transactions createTransactions(@RequestBody Transactions transactions) throws Exception {
        return transactionsService.createTransaction(transactions);
    }

    @GetMapping("/transactions")
    public List<Transactions> getAllTransactions() {
        return transactionsService.findAllTransactions();
    }

    @GetMapping("transactions/{name}")
    public List<Transactions> findByOriginName(@PathVariable String name) {
        return transactionsService.findByOriginName(name);
    }

    @GetMapping("transaction/{id}")
    public Transactions findByTransactionsId(@PathVariable String id){
        return transactionsService.findByTransactionId(id);
    }
}