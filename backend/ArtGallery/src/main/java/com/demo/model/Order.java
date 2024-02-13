package com.demo.model;

import jakarta.persistence.Entity;

@Entity
public class Order {
	private int oId;
	Product prod;
	Customer cust;
	
	
}
