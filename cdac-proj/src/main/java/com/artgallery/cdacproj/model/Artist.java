package com.artgallery.cdacproj.model;

public class Artist {
	User u;
	private int id;
	
	
	@Override
	public String toString() {
		return "Artist [u=" + u + ", id=" + id + "]";
	}
	public Artist() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Artist(User u, int id) {
		super();
		this.u = u;
		this.id = id;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public User getU() {
		return u;
	}
	public void setU(User u) {
		this.u = u;
	}
	
	
}
