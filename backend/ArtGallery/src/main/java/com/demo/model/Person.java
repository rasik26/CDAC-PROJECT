package com.demo.model;

import jakarta.persistence.Id;

public class Person {
	@Id
	private int pid;
	private String name;
	private String mail;
	private String password;
	Address address;
	Wishlist wlist;
	
	//wishlist
	//prevorder
	
	
	
	

}