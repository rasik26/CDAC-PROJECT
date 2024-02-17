package com.artgallery.cdacproj.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.artgallery.cdacproj.dao.AddressDao;
import com.artgallery.cdacproj.dao.UserDao;
import com.artgallery.cdacproj.model.Address;

@Service
public class AddressServiceImpl implements AddressService{

	
    @Autowired
    private AddressDao addressRepository;

    @Autowired
    private UserDao userRepository;
    
    @Override
    public void addAddress(Address address, Long userId) {
        userRepository.findById(userId)
                      .ifPresent(user -> {
                          address.setUser(user);
                          addressRepository.save(address);
                      });
    }


	@Override
	public List<Address> findAddressesByUserId(Long userId) {
		 return addressRepository.findByUserId(userId);
	}

}
