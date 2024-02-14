package com.artgallery.cdacproj.model;

import org.springframework.data.annotation.Id;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;

public class Cart {
	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	private int cId;
	@OneToOne()
	@JoinColumn(name="id")
	User user;
	
	@ManyToOne
	@JoinColumn(name="id")
	Product prod;
	//total
	private float total;
	
	public int getcId() {
		return cId;
	}
	public void setcId(int cId) {
		this.cId = cId;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Product getProd() {
		return prod;
	}
	public void setProd(Product prod) {
		this.prod = prod;
	}
	@Override
	public String toString() {
		return "Cart [cId=" + cId + ", user=" + user + ", prod=" + prod + ", total=" + total + "]";
	}
	public Cart(int cId, User user, Product prod, float total) {
		super();
		this.cId = cId;
		this.user = user;
		this.prod = prod;
		this.total = total;
	}
	public float getTotal() {
		return total;
	}
	public void setTotal(float total) {
		this.total = total;
	}
	
	

}
