package com.artgallery.cdacproj.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.artgallery.cdacproj.dao.ProductDao;
import com.artgallery.cdacproj.model.Product;

@Service
public class ProductServiceImpl implements ProductService {
	
	
	@Autowired
	private ProductDao pdao;

	@Override
	public List<Product> getAllProducts() {
		// TODO Auto-generated method stub
		return pdao.findAll();
	}

	@Override
	public List<Product> getProductsByCategory(String categoryName) {
		return pdao.getProductByCategoryName(categoryName);
	}

	@Override
<<<<<<< HEAD

=======
>>>>>>> 2bc88c2efa2d8b1189fa12f5f4b0fd005190666c
	public List<Product> getProductByArtistName(String artistName) {
		return pdao.findByArtistName(artistName);
	}

	@Override
	public void deleteById(int id) {
		pdao.deleteById((long) id);

	}
<<<<<<< HEAD
	
=======

>>>>>>> 2bc88c2efa2d8b1189fa12f5f4b0fd005190666c
	public void addnewProduct(Product p) {
		pdao.save(p);

	}
<<<<<<< HEAD

	@Override
	public Product findById(long id) {
		// TODO Auto-generated method stub
		return null;
	}


=======
>>>>>>> 2bc88c2efa2d8b1189fa12f5f4b0fd005190666c
}
