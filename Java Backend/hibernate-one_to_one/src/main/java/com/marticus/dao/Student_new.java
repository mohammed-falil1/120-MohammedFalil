package com.marticus.dao;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.Table;
	
	@Entity
	@Table(name = "STUDENT")
	public class Student_new {
	
	private long studentId;
	private String studentName;
	private Set<Phone> studentPhoneNumbers = new HashSet<Phone>(0);
	private Set<CoachingCenter> coachingCenter;
	
	

	public Student_new() {
		
	}
	
//	public Student_new(String studentName, Set<Phone> studentPhoneNumbers) {
//	this.studentName = studentName;
//	this.studentPhoneNumbers = studentPhoneNumbers;
//	}
//	
	public Student_new(String studentName , Set<CoachingCenter> coachingCenter)
	{
		this.studentName = studentName;
		this.coachingCenter = coachingCenter;
	}
	
	@Id
	@GeneratedValue
	@Column(name = "STUDENT_ID")
	public long getStudentId() {
	return this.studentId;
	}
	
	public void setStudentId(long studentId) {
	this.studentId = studentId;
	}
	
	@Column(name = "STUDENT_NAME", nullable = false, length = 100)
	public String getStudentName() {
	return this.studentName;
	}
	
	public void setStudentName(String studentName) {
	this.studentName = studentName;
	}
	
//	///this is for phone(one to many)
//	@OneToMany(cascade = CascadeType.ALL)
//	@JoinTable(name = "STUDENT_PHONE", joinColumns = { @JoinColumn(name = "STUDENT_ID") }, inverseJoinColumns = { @JoinColumn(name = "PHONE_ID") })
//	public Set<Phone> getStudentPhoneNumbers() {
//	return this.studentPhoneNumbers;
//	}
//	public void setStudentPhoneNumbers(Set<Phone> studentPhoneNumbers) {
//		this.studentPhoneNumbers = studentPhoneNumbers;
//		}

	
	
	//this one is for CoachingCenter(one to many)
	@OneToMany(cascade = CascadeType.ALL)
	@JoinTable(name = "STUDENT_Coach", joinColumns = { @JoinColumn(name = "STUDENT_ID") }, inverseJoinColumns = { @JoinColumn(name = "CCID") })
	public Set<CoachingCenter> getCoachingCenter() {
		return coachingCenter;
	}

	public void setCoachingCenter(Set<CoachingCenter> coachingCenter) {
		this.coachingCenter = coachingCenter;
	}

}