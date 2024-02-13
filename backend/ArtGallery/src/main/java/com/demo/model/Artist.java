package com.demo.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;



@Entity
@Table(name = "sdv")
public class Artist {
	@Id
	private int id;
	private List<Product> prod;

	public Artist() {
		super();
	}

	public Artist(int id, List<Product> prod) {
		super();
		this.id = id;
		this.prod = prod;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public List<Product> getProd() {
		return prod;
	}

	public void setProd(List<Product> prod) {
		this.prod = prod;
	}

	@Override
	public String toString() {
		return "Artist [id=" + id + ", prod=" + prod + "]";
	}
}
