package com.marticus.dao;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name = "Library")
public class Library {
	
	private int libraryId;
	private String libName;
	private  Set<Books> books = new HashSet<Books>();
	

	
	public Library() {
		
	}
	
	public Library( String libName, Set<Books> books) {
		this.libName = libName;
		this.books = books;
	}
	@Id
	@GeneratedValue
	@Column(name = "LibId")
	public int getLibraryId() {
		return libraryId;
	}
	public void setLibraryId(int libraryId) {
		this.libraryId = libraryId;
	}
	
	@Column(name = "LibName")
	public String getLibName() {
		return libName;
	}
	public void setLibName(String libName) {
		this.libName = libName;
	}
	
	@ManyToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinTable(name = "Library_Books", joinColumns = { @JoinColumn(name = "LibId") }, inverseJoinColumns = { @JoinColumn(name = "BOOK_ID") })
	public Set<Books> getBooks() {
		return books;
	}
	public void setBooks(Set<Books> books) {
		this.books = books;
	}
	
	
}
