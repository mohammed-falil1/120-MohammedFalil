package com.marticus.dao;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "CoachingCenter")
public class CoachingCenter {
	
	private int id;
	
	@Id
	@GeneratedValue
	@Column(name = "CCId")
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	private String name;
	private String subject;
	
	@Column(name = "Name")
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Column(name = "Subject")
	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public CoachingCenter()
	{
		
	}
	
	public CoachingCenter(String name ,String subject)
	{
		this.name = name;
		this.subject = subject;
	}
	
	
	
	

}
