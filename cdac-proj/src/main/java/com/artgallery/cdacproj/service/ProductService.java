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
	List<Product> getProductByArtistName(String artistName);

	void deleteById(int id);
>>>>>>> 2bc88c2efa2d8b1189fa12f5f4b0fd005190666c

	void addnewProduct(Product p);
	
	Product findById(long id);


<<<<<<< HEAD


}
=======
}
>>>>>>> 2bc88c2efa2d8b1189fa12f5f4b0fd005190666c
