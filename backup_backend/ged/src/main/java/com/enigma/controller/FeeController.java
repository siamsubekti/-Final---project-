package com.enigma.controller;

import com.enigma.entities.Fee;
import com.enigma.services.FeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class FeeController {
    @Autowired
    FeeService feeService;

    @PostMapping("/fee")
    public Fee createFee(@RequestBody Fee fee){
        return feeService.createFee(fee);
    }

    @GetMapping("/fee")
    public List<Fee> getAllFee(){
        return feeService.getAllFee();
    }

    @GetMapping("/fee/{origin}/{destination}")
    public Fee getFeeById(@PathVariable Integer id){
        return feeService.getFeeById(id);
    }

    @PutMapping("/fee")
    public Fee updateFee(@RequestBody Fee fee){
        return feeService.updateFee(fee);
    }

    @DeleteMapping("/fee/{id}")
    public void deleteFeeById(@PathVariable Integer  id){
        feeService.deleteFeeByid(id);
    }


}
