package com.marticus.dao;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Person")
public class Person {
	
	private int personId;
	private String personName;
	private Aadhar aadhar;
	

	
	@OneToOne(cascade = CascadeType.ALL)
	public Aadhar getAadhar() {
		return this.aadhar;
	}
	
	
	public void setAdhar(Aadhar aadhar) {
		this.aadhar = aadhar;
	}

	public void setAadhar(Aadhar aadhar) {
		this.aadhar = aadhar;
	}

	public Person() {
	}

	public Person(String personName, Aadhar aadhar) {
		this.personName = personName;
		this.aadhar = aadhar;
	}
//	

	@Id
	@GeneratedValue
	@Column(name = "PersonId")
	public int getPersonId() {
		return this.personId;
	}

	public void setPersonId(int personId) {
		this.personId = personId;
	}

	@Column(name = "PersonName", nullable = false, length = 100)
	public String getPersonName() {
		return this.personName;
	}

	public void setPersonName(String personName) {
		this.personName = personName;
	}

	
	

	


}
