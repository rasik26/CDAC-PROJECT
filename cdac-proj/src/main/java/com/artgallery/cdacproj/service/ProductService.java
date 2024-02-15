package com.artgallery.cdacproj.service;

import java.util.List;

import com.artgallery.cdacproj.model.Product;

public interface ProductService {

	List<Product> getAllProducts(); // Getting all products in the database

	List<Product> getProductsByCategory(String category);

	List<Product> getProductByArtistName(String artistName);

	void deleteById(int id);

	void addnewProduct(Product p);

<<<<<<< HEAD
	Product getById(int id);
}
=======
	Product findById(Long productId);

}
>>>>>>> c7eebf0af18954d749c2173ff3978f455b034984
