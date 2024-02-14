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


}
