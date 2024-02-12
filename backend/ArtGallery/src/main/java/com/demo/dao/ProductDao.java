package com.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.model.Product;

public interface ProductDao extends JpaRepository<Product, Integer> {

}
