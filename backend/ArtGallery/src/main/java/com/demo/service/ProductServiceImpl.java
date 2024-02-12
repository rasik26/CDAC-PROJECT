package com.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.dao.ProductDao;
import com.demo.model.Product;

@Service
public class ProductServiceImpl implements ProductService {

	
	
	@Autowired
	private ProductDao productDao;
	
	
	@Override
	public void addProduct(Product product) {
		
		productDao.save(product);
	}

}
