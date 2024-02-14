package com.artgallery.cdacproj.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.artgallery.cdacproj.model.Product;
import com.artgallery.cdacproj.service.ProductService;

	
	@RequestMapping("/")
	@RestController
	public class ProductController {

		@Autowired
		ProductService pservice;
		
		@GetMapping("/products") 	//controller for getting all products
		public ResponseEntity<List<Product>> getAllProducts(){
			List<Product> plist =pservice.getAllProducts();
			return ResponseEntity.ok(plist);
		}
		
		@GetMapping("/products/{category}")
		public ResponseEntity<List<Product>> getProductByCategory(@PathVariable("category") String categoryName) {
		    List<Product> productList = pservice.getProductsByCategory(categoryName);
		    if (productList != null)
		        return ResponseEntity.ok(productList);
		    else
		        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
		
		
		
		@PostMapping("products/{pid}")
		public ResponseEntity<String> insertProduct(@RequestBody Product p){
			pservice.addnewProduct(p);
			return ResponseEntity.ok("data added successfully");
		}

	}

