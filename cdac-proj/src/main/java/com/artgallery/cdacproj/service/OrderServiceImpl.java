package com.artgallery.cdacproj.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.artgallery.cdacproj.dao.OrderDao;
import com.artgallery.cdacproj.model.Orders;

@Service
public class OrderServiceImpl implements OrderService {

	@Autowired
	private Orders orders;


	@Autowired
	private OrderDao odao;

	@Override
	public Orders getorderbyCartid(Long cartid) {
		Optional<Orders> op = orders.findById(cartid);
		if (op.isPresent())
			return op.get();
		else
			return null;
	}

	@Override
	public List<Orders> getallorder() {
		List<Orders> olist = odao.findAll();
		if (olist != null)
			return olist;
		return olist;
	}

}
