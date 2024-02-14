package com.artgallery.cdacproj.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

import com.artgallery.cdacproj.model.Product;

public interface ProductDao extends JpaRepository<Product, Long> {

	@Query("SELECT p FROM Product p WHERE p.category.name = :categoryName")
	List<Product> getProductByCategoryName(String categoryName);

}
