package com.artgallery.cdacproj.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.artgallery.cdacproj.model.Order;
import com.artgallery.cdacproj.service.CartService;
import com.artgallery.cdacproj.service.OrderService;


@RequestMapping("/")
@RestController
public class OrderController {
	@Autowired
	private OrderService orderService;
	//@Autowired
	//private CartService cartService;

	public OrderController(OrderService orderService) {
		this.orderService = orderService;
		//this.cartService = cartService;
	}

	@GetMapping("/orderid/{id}")
	public ResponseEntity<OrderService> getOrderByUserId(@PathVariable Long id) {
		Order order = orderService.getorderbyCartid(id);
		if (orderService != null)
			return ResponseEntity.ok(orderService);
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

	}

	@GetMapping("/allOrders")
	public ResponseEntity<List<Order>> getAllOrder() {
		List<Order> allOrder = orderService.getallorder();
		if (allOrder != null) {
			return ResponseEntity.ok(allOrder);
		} else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}

}
//getorderbyUserid//--
//getallorder;// admin
