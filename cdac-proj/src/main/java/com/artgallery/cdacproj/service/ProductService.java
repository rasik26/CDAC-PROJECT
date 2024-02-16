package com.artgallery.cdacproj.service;

import java.util.List;
import java.util.Optional;

import com.artgallery.cdacproj.model.Product;

public interface ProductService {

	List<Product> getAllProducts(); // Getting all products in the database

	List<Product> getProductsByCategory(String category);


	List<Product> getProductByArtistName(String artistName);

	void deleteById(int id);

	void addnewProduct(Product p);


	Product getById(int id);



	Optional<Product> findById(Long productId);

}

