package com.artgallery.cdacproj.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Product {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	
	private String title;
	
	

	private String artistName;
	
	private String description;
	
	private int price;
	
	private int discountedPrice;
	
	private int discountPercentage;
	
	private String imageUrl;
	
	@ManyToOne()
	@JoinColumn(name="categoryId")
	private Category category;

	public Product() {
	}

	public Product(long id, String title, String artistName, String description, int price, int discountedPrice,
			int discountPercentage, String imageUrl, Category category) {
		super();
		this.id = id;
		this.title = title;
		this.artistName = artistName;
		this.description = description;
		this.price = price;
		this.discountedPrice = discountedPrice;
		this.discountPercentage = discountPercentage;
		this.imageUrl = imageUrl;
		this.category = category;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}



	public String getArtistName() {
		return artistName;
	}

	public void setArtistName(String artistName) {
		this.artistName = artistName;
	}

	public String getDescription() {
		return description;
	}
	
	
	

	public void setDescription(String description) {
		this.description = description;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public int getDiscountedPrice() {
		return discountedPrice;
	}

	public void setDiscountedPrice(int discountedPrice) {
		this.discountedPrice = discountedPrice;
	}

	public int getDiscountPercentage() {
		return discountPercentage;
	}

	public void setDiscountPercentage(int discountPercentage) {
		this.discountPercentage = discountPercentage;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}
	
	

	
}
