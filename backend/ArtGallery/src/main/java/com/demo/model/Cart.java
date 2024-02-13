package com.demo.model;

import jakarta.persistence.Entity;

@Entity
public class Cart {
	private int cId;
	Product prod;

	public Cart() {
		super();
	}

	public Cart(int cId, Product prod) {
		super();
		this.cId = cId;
		this.prod = prod;
	}

	public int getcId() {
		return cId;
	}

	public void setcId(int cId) {
		this.cId = cId;
	}

	public Product getProd() {
		return prod;
	}

	public void setProd(Product prod) {
		this.prod = prod;
	}

	@Override
	public String toString() {
		return "Cart [cId=" + cId + ", prod=" + prod + "]";
	}

}
