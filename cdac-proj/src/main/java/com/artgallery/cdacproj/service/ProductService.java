package com.artgallery.cdacproj.service;

import java.util.List;
import java.util.Optional;

import com.artgallery.cdacproj.model.Product;

public interface ProductService {

	List<Product> getAllProducts(); // Getting all products in the database

	List<Product> getProductsByCategory(String category);

<<<<<<< HEAD

=======
>>>>>>> 7c2f37acf0437f0ae7dab3513e64f2640044c213
	List<Product> getProductByArtistName(String artistName);

	void deleteById(int id);

	void addnewProduct(Product p);
<<<<<<< HEAD

	
	Optional<Product> findById(long id);




=======
>>>>>>> 7c2f37acf0437f0ae7dab3513e64f2640044c213


	Product getById(int id);

<<<<<<< HEAD
}


=======

	Product findById(Long productId);

}

>>>>>>> 7c2f37acf0437f0ae7dab3513e64f2640044c213
