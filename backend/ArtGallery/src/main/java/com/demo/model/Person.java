package com.demo.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="person_details")
public class Person {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int pid;
	private String firstname;
	private String lastname;
	private String email;
	private String password;
	private String mobile;
	
	@OneToMany(mappedBy = "Person",cascade = CascadeType.ALL) //if we delete person then automatically all addresses are also be deleted
	@JoinColumn(name = "fk_addId")
	private List<Address> address= new ArrayList<>();
	
//	@Embedded
//	@ElementCollection
//	@CollectionTable(name = "payment_information",joinColumns = @JoinColumn(name="pid"))
//	private List<PaymentInformation> paymentInformation = new ArrayList<>();
//	
//	
//	@OneToMany(mappedBy = "person",cascade = CascadeType.ALL)
//	@JsonIgnore
//	private List<Rating> ratings = new ArrayList<>();
//	
//	
//	Wishlist wlist;
	
	//wishlist
	//prevorder
	
	
	
	

}
