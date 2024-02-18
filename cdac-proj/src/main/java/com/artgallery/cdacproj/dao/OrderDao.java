package com.artgallery.cdacproj.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.artgallery.cdacproj.model.Order;

public interface OrderDao extends JpaRepository<Order, Long> {

	public List<Order> findAll();

}
