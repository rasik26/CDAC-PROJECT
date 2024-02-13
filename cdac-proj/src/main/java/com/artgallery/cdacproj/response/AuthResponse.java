package com.artgallery.cdacproj.response;

public class AuthResponse {

	private String jwt;
	
	private String status;
	
	public AuthResponse() {
		// TODO Auto-generated constructor stub
	}

	public AuthResponse(String jwt, String status) {
		super();
		this.jwt = jwt;
		this.status = status;
	}

	public String getJwt() {
		return jwt;
	}

	public void setJwt(String jwt) {
		this.jwt = jwt;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
}
