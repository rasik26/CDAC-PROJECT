package com.artgallery.cdacproj.service;

import java.util.List;
import java.util.Optional;

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

	public List<Product> getProductByArtistName(String artistName) {
		return pdao.findByArtistName(artistName);
	}

	@Override
	public void deleteById(int id) {
		pdao.deleteById((long) id);

	}

	@Override
	public void addnewProduct(Product p) {
		pdao.save(p);

	}


		


	public Product getById(int id) {
		// TODO Auto-generated method stub
		Optional<Product> op = pdao.findById((long) id);
		if (op.isPresent())
			return op.get();
		else
			return null;
	}

	@Override
	public Optional<Product> findById(Long productId) {
		// TODO Auto-generated method stub
		return pdao.findById(productId);
	}


	}


