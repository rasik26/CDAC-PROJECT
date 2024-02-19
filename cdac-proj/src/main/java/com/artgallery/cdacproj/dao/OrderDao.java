package com.artgallery.cdacproj.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.artgallery.cdacproj.model.Orders;

public interface OrderDao extends JpaRepository<Orders, Long> {

	public List<Orders> findAll();

}
