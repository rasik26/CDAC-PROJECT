package com.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="product1")
public class Product{
	@Id
	private int pId;
	private String  pName;
	private double price;
	private String desc;
	//category
	//availability
	private String artist;
	
	
	
	public Product() {
		super();
	}


	public Product(int pId, String pName, double price, String desc, String artist) {
		super();
		this.pId = pId;
		this.pName = pName;
		this.price = price;
		this.desc = desc;
		this.artist = artist;
	}
	
	
	public int getpId() {
		return pId;
	}
	public void setpId(int pId) {
		this.pId = pId;
	}
	public String getpName() {
		return pName;
	}
	public void setpName(String pName) {
		this.pName = pName;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	public String getArtist() {
		return artist;
	}
	public void setArtist(String artist) {
		this.artist = artist;
	}
	

	@Override
	public String toString() {
		return "Product [pId=" + pId + ", pName=" + pName + ", price=" + price + ", desc=" + desc + ", artist=" + artist
				+ "]";
	}


	

}
