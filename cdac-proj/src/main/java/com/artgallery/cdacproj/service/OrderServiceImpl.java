package com.artgallery.cdacproj.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.artgallery.cdacproj.dao.OrderDao;
import com.artgallery.cdacproj.model.Order;

@Service
public class OrderServiceImpl implements OrderService {

	@Autowired
	private Order order;

	@Autowired
	private OrderDao odao;

	@Override
	public Order getorderbyCartid(Long cartid) {
		Optional<Order> op = order.findById(cartid);
		if (op.isPresent())
			return op.get();
		else
			return null;
	}

	@Override
	public List<Order> getallorder() {
		List<Order> olist = odao.findAll();
		if (olist != null)
			return olist;
		return olist;
	}

}
