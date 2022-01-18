package com.javatpoint.mypackage;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("savingsAccount")
public class SavingsAccount extends Account {
	
	@Column(name="interest")
	private int interest;

	public int getInterest() {
		return interest;
	}

	public void setInterest(int interest) {
		this.interest = interest;
	}
	
	
	

}
