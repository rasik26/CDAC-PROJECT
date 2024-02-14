package com.artgallery.cdacproj.service;

import java.util.List;

import com.artgallery.cdacproj.model.Product;

public interface ProductService {

	List<Product> getAllProducts(); // Getting all products in the database

	List<Product> getProductsByCategory(String category);

<<<<<<< HEAD


=======
>>>>>>> d230d2051375a6f9650acfbbed1e1339fad26b1c
	List<Product> getProductByArtistName(String artistName);

	void deleteById(int id);
<<<<<<< HEAD

	void addnewProduct(Product p);

=======
>>>>>>> d230d2051375a6f9650acfbbed1e1339fad26b1c

	void addnewProduct(Product p);

}