package com.artgallery.cdacproj.response;

public class AuthResponse {

	private String jwt;
	
	private String status;
	
	private String firstName;
	
	private long id;
	
	private String role;
	
	public AuthResponse() {
		// TODO Auto-generated constructor stub
	}

	public AuthResponse(String jwt, String status,String firstName,long id,String role) {
		super();
		this.jwt = jwt;
		this.status = status;
		this.firstName=firstName;
		this.id=id;
		this.role=role;
	}
	
	

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
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

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	
	
}
