package com.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.stereotype.Repository;

import com.demo.model.Product;

@Repository
public interface ProductDao extends JpaRepository<Product, Integer>{

//write a query to get products by category
	 @Query(value="select * from product where category = :category", nativeQuery = true)
	 List<Product> getProductByName(String name);
	   
}
