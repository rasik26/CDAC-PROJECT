package com.artgallery.cdacproj.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.artgallery.cdacproj.model.Address;

@Repository
public interface AddressDao extends JpaRepository<Address, Long> {

	List<Address> findByUserId(Long userId);

}
