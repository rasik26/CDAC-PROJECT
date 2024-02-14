package com.artgallery.cdacproj.service;

import java.util.List;

import com.artgallery.cdacproj.model.Product;

public interface ProductService {

	List<Product> getAllProducts(); // Getting all products in the database


	List<Product> getProductsByCategory(String category);


<<<<<<< HEAD
	List<Product> getProductByArtistName(String artistName);


	void deleteById(int id);
=======
	void addnewProduct(Product p);
>>>>>>> bb141492e928b9e981fb0a849d78b34eca16d3b5


}