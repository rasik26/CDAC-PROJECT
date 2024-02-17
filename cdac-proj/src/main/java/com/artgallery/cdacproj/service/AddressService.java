package com.artgallery.cdacproj.service;

import java.util.List;

import com.artgallery.cdacproj.model.Address;

public interface AddressService {

	void addAddress(Address address, Long id);

	List<Address> findAddressesByUserId(Long userId);

}
