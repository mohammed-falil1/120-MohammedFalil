package com.marticus.main;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.UniqueConstraint;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.marticus.dao.Aadhar;
import com.marticus.dao.Address;
import com.marticus.dao.CoachingCenter;
import com.marticus.dao.College;
import com.marticus.dao.Person;
import com.marticus.dao.Phone;
import com.marticus.dao.Student;
import com.marticus.dao.Student_new;
import com.marticus.util.HibernateUtil;
import com.mysql.cj.PerConnectionLRUFactory;

public class App {
	 

		public static void main(String[] args) {
			Session session = HibernateUtil.getSessionFactory().openSession();
			Transaction transaction = null;
			try {
				transaction = session.beginTransaction();
//				Address address1 = new Address("OMR Road", "Chennai", "TN", "600097");
//				Address address2 = new Address("Ring Road", "Banglore", "Karnataka", "560000");
//				Student student1 = new Student("Eswar", address1);
//				Student student2 = new Student("Joe", address2);
//				session.save(student1);
//				session.save(student2);
////				
//				College college11 = new College("CLG1", "ENG");
//				College college2 = new College("CLG2", "ARTS");
//				Student student11 = new Student("Mohammed",college11);
//				Student student2 = new Student("Falil",college2);
//				session.save(student11);
//				session.save(student2);
//				
				//this is for the one to many
//				Aadhar aadhar = new Aadhar("12345");
//				Person person = new Person("Falil",aadhar);
//				session.save(person);
//				Set<Phone> phoneNumbers = new HashSet<Phone>();
//				phoneNumbers.add(new Phone("house","32354353"));
//				phoneNumbers.add(new Phone("mobile","9889343423"));

//				Student_new student_new = new Student_new("Eswar", phoneNumbers);
//				session.save(student_new);
				
//				//this is for the one to many
//				Set<CoachingCenter> coachingCenter = new HashSet<CoachingCenter>();
//				coachingCenter.add(new CoachingCenter("LearnPhysics","Physics"));
//				coachingCenter.add( new CoachingCenter("ChemLearn","Chemistry"));
//				coachingCenter.add(new CoachingCenter("MathsYoga","Maths"));
//				Student_new student_new1 = new Student_new("Mohammed",coachingCenter);
//				session.save(student_new1);
				
				
				
				transaction.commit();
			} catch (HibernateException e) {
				transaction.rollback();
				e.printStackTrace();
			} finally {
				session.close();
			}

		}

	}
 
