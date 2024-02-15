package com.artgallery.cdacproj.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

import com.artgallery.cdacproj.model.Product;

public interface ProductDao extends JpaRepository<Product, Long> {

	@Query("SELECT p FROM Product p WHERE p.category.name = :categoryName")
	List<Product> getProductByCategoryName(String categoryName);


	@Query("SELECT p FROM Product p WHERE p.artistName = :artistName")
	List<Product> findByArtistName(String artistName);

	
}
