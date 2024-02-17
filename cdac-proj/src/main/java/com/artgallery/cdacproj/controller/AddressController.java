package com.artgallery.cdacproj.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.artgallery.cdacproj.model.Address;
import com.artgallery.cdacproj.service.AddressService;

@RestController
@RequestMapping("/address")
public class AddressController {

    @Autowired
    private AddressService addressService;

    @PostMapping("/deliverAddress/{id}")
    public ResponseEntity<String> deliverAddress(@RequestBody Address address,@PathVariable Long id) {
        try {
            // Call service method to process the address data
            addressService.addAddress(address,id);
            return ResponseEntity.ok("Address delivered successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to deliver address");
        }
    }
    
    
    @GetMapping("/find/{userId}")
    public ResponseEntity<List<Address>> findAddressByUserId(@PathVariable Long userId) {
        try {
            List<Address> addresses = addressService.findAddressesByUserId(userId);
            if (addresses.isEmpty()) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(addresses);
            }
            return ResponseEntity.ok(addresses);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}

