package com.marticus.dao;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "College")
public class College {
	
	private int collegeId;
	
	private String collegeName;
	
	private String collegeType;
	
	
	public College()
	{
		
	}


	public College( String collegeName, String collegeType) {
		this.collegeName = collegeName;
		this.collegeType = collegeType;
	}


	@Id
	@GeneratedValue
	@Column(name = "collegeId")
	public int getCollegeId() {
		return this.collegeId;
	}


	public void setCollegeId(int collegeId) {
		this.collegeId = collegeId;
	}

	@Column(name = "collegName" , nullable = false , length=200 )
	public String getCollegeName() {
		return collegeName;
	}


	public void setCollegeName(String collegeName) {
		this.collegeName = collegeName;
	}

	@Column(name = "collegeType" , nullable = false , length=200 )
	public String getCollegeType() {
		return collegeType;
	}


	public void setCollegeType(String collegeType) {
		this.collegeType = collegeType;
	}
	
	
	

}
