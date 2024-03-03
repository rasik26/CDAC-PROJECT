package com.artgallery.cdacproj.model;

import jakarta.persistence.Column;

public class Paymentinformation {

	@Column(name="cardholder_name")
	private String cardHolderName;
	
	@Column(name="card_number")
	private String cardNumber;
	
	@Column(name="expirationdate")
	private String expirationdate;
	
	@Column(name="cvv")
	private String cvv;
}
