package com.javatpoint.mypackage;

import java.net.SecureCacheResponse;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.boot.Metadata;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;

public class AccountMain {
	
	public static void main(String args[])
	{
		
		StandardServiceRegistry ssr = new StandardServiceRegistryBuilder().configure("hibernate.cfg.xml").build();
	    Metadata meta = new MetadataSources(ssr).getMetadataBuilder().build();
		
		SessionFactory factory=meta.getSessionFactoryBuilder().build();
		Session session=factory.openSession();
		
		Transaction t=session.beginTransaction();  
		
		SavingsAccount savingsAccount= new SavingsAccount();
		savingsAccount.setAccountID("SA1");
		savingsAccount.setInterest(10);
		savingsAccount.setAccHolderName("Peter Parker");
		savingsAccount.setBalance(Double.parseDouble("1000"));
		
		CurrentAccount currentAccount= new CurrentAccount();
		currentAccount.setAccountID("CA1");
		currentAccount.setOverDraftAmount(20000);
		currentAccount.setAccHolderName("SpiderMan");
		currentAccount.setBalance(Double.valueOf("300000"));
		
		session.persist(savingsAccount);
		session.persist(currentAccount);
		
		t.commit();
		session.close();
		 System.out.println("success Account Main");
		
	      
	}

}
