package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.Product;
import com.demo.service.ProductService;
@RequestMapping("/")
@RestController
public class ProductController {
	
	@Autowired
	ProductService pservice;
	

	@GetMapping("/products") //controller for getting all products
	public ResponseEntity<List<Product>> getAllProducts(){
		List<Product> plist =pservice.getAllProducts();
		return ResponseEntity.ok(plist);
	}
	
	@GetMapping("/products/{category}")
	public ResponseEntity<List<Product>> getProductByName(@PathVariable("category") String name){
		List<Product> productList = pservice.getProductsBycategory(name);
		return ResponseEntity.ok(productList);
	}

	

}
