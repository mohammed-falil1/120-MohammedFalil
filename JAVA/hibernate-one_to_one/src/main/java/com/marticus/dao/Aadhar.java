package com.marticus.dao;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Aadhar")
public class Aadhar {
	
	private int id;
	private String number;
	@Id
	@GeneratedValue
	@Column(name = "AadharId")
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	
	@Column(name = "AadharNumber", nullable = false, length=250)
	public String getNumber() {
		return number;
	}
	public void setNumber(String number) {
		this.number = number;
	}
	
	public Aadhar(String number)
	{
		this. number=number;
	}
	
	
	

}
