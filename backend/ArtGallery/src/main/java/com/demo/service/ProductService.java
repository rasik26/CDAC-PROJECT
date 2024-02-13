package com.demo.service;

import java.util.List;

import com.demo.model.Product;

public interface ProductService {
	List<Product> getAllProducts(); // Getting all products in the database

	List<Product> getProductsBycategory(String name); // Getting all products by cateogary in the database

}
