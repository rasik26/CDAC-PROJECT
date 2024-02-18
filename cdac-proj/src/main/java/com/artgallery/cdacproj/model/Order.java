package com.artgallery.cdacproj.model;

import java.util.Optional;

public class Order {
	private int oId;
	Cart cart;
	Product prod;
	User user;
	
	public int getoId() {
		return oId;
	}
	public void setoId(int oId) {
		this.oId = oId;
	}
	public Cart getCart() {
		return cart;
	}
	public void setCart(Cart cart) {
		this.cart = cart;
	}
	public Product getProd() {
		return prod;
	}
	public void setProd(Product prod) {
		this.prod = prod;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Order(int oId, Cart cart, Product prod, User user) {
		super();
		this.oId = oId;
		this.cart = cart;
		this.prod = prod;
		this.user = user;
	}
	@Override
	public String toString() {
		return "Order [oId=" + oId + ", cart=" + cart + ", prod=" + prod + ", user=" + user + "]";
	}
	public Optional<Order> findById(Long cartid) {
		// TODO Auto-generated method stub
		return null;
	}
	
	


	
}
