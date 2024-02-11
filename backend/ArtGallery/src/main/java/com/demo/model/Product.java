package com.demo.model;

@Entity
public class Product {

	@Id
	private int pId;
	private String  pName;
	private double price;
	private String desc;
	//category
	//availability
	Artist artist;
	

}
