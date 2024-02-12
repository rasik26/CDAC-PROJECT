package com.demo.model;

import jakarta.persistence.Id;

public class Address {
	@Id
	private int addId;
	private String address;
	private String city;
	private String state;
	private int pincode;
	
	
	
	

}
