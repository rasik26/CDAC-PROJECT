package com.demo.model;

public class Product {
	
	private int pId;
	private String  pName;
	private double price;
	private double discountedPrice;
	private int discountPercent;
	private String desc;
	private String category;
	private Artist artist;
	
	
	public Product() {
		super();
	}
	
	
	public Product(int pId, String pName, double price, double discountedPrice, int discountPercent, String desc,
			String category, Artist artist) {
		super();
		this.pId = pId;
		this.pName = pName;
		this.price = price;
		this.discountedPrice = discountedPrice;
		this.discountPercent = discountPercent;
		this.desc = desc;
		this.category = category;
		this.artist = artist;
	}
	
	

}
