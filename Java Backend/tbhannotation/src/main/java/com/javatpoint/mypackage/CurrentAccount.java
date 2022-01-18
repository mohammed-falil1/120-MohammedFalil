package com.javatpoint.mypackage;

import javax.persistence.Column;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("currentAccount") 
public class CurrentAccount extends Account {

	@Column
	private int overDraftAmount;

	public int getOverDraftAmount() {
		return overDraftAmount;
	}

	public void setOverDraftAmount(int overDraftAmount) {
		this.overDraftAmount = overDraftAmount;
	}
	
}
