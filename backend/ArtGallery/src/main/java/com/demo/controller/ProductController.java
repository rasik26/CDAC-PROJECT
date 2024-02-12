package com.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.demo.model.Artist;
import com.demo.model.Product;
import com.demo.service.ProductService;

@Controller
@RequestMapping("/Product")
public class ProductController {
	
	@Autowired
	private ProductService productService;

	
//	private int pId;
//	private String  pName;
//	private double price;
//	private double discountedPrice;
//	private int discountPercent;
//	private String desc;
//	private String category;
//	private Artist artist;
	
	@PostMapping("/newProduct")
	public ModelAndView insertStudent(@RequestParam int pId,@RequestParam String pName,@RequestParam double price,@RequestParam double discountedPrice,@RequestParam int discountPercent, @RequestParam String desc,@RequestParam String category,@RequestParam Artist artist)
	{
		Product product = new Product(pId,pName,price,discountedPrice,discountPercent,desc,category,artist);
		productService.addProduct(product);
		
		return new ModelAndView("redirect:/Product");
	}
}
