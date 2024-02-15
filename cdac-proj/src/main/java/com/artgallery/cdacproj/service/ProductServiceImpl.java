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
>>>>>>> bf7086c523a4e10284aadce6389851501672f0e5
	public List<Product> getProductByArtistName(String artistName) {
		return pdao.findByArtistName(artistName);
	}

	@Override
	public void deleteById(int id) {
		pdao.deleteById((long) id);

	}

	public void addnewProduct(Product p) {
		pdao.save(p);

	}
<<<<<<< HEAD

=======
>>>>>>> bf7086c523a4e10284aadce6389851501672f0e5

	@Override
	public Product findById(Long productId) {
		// TODO Auto-generated method stub
		return null;
	}
<<<<<<< HEAD

=======
>>>>>>> bf7086c523a4e10284aadce6389851501672f0e5
}
