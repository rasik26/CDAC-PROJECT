package com.artgallery.cdacproj.service;

import java.util.List;

import com.artgallery.cdacproj.model.Product;

public interface ProductService {

	List<Product> getAllProducts(); // Getting all products in the database

	List<Product> getProductsByCategory(String category);

<<<<<<< HEAD


=======
>>>>>>> bf7086c523a4e10284aadce6389851501672f0e5
	List<Product> getProductByArtistName(String artistName);

	void deleteById(int id);

	void addnewProduct(Product p);
<<<<<<< HEAD
	
	Product findById(long id);



}



=======

	Product findById(Long productId);

}
>>>>>>> bf7086c523a4e10284aadce6389851501672f0e5
