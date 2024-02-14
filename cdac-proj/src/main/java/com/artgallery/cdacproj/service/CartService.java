package com.artgallery.cdacproj.service;

import java.util.List;

import com.artgallery.cdacproj.model.Product;

public interface CartService {
	
	//add product to cart;
	List<Product> addProductToCart();
	
	//remove product from cart;
	void removeProductFromcart();
}
