package com.marticus.dao;

import java.util.HashSet;
import java.util.Set;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import com.marticus.util.HibernateUtil;

public class M2MT {
	
	public static void main(String[] args) {
		Session session = HibernateUtil.getSessionFactory().openSession();
		Transaction transaction = null;
		try {
			transaction = session.beginTransaction();
//
//			Set<Course> courses = new HashSet<Course>();
//			courses.add(new Course("Maths"));
//			courses.add(new Course("Computer Science"));
//
//			Student student1 = new Student("Eswar", courses);
//			Student student2 = new Student("Joe", courses);
//			session.save(student1);
//			session.save(student2);
			
//			Student student11 = new Student();
//			student11.setStudentId(1);
//			session.load(student11, new Long(1));
//			//student11.getCourses();
			
			Set<Books> books = new HashSet<Books>();
			books.add(new Books("Java"));
			books.add(new Books(".NET"));
			Library lib1= new Library("Central Library ", books);
			Set<Books> books1 = new HashSet<Books>();
			books1.add(new Books("Java"));
			books1.add(new Books("Python"));
			Library lib2= new Library("National Library ", books);
			session.save(lib1);
			session.save(lib2);
			
			transaction.commit();
		} catch (HibernateException e) {
			transaction.rollback();
			e.printStackTrace();
		} finally {
			session.close();
		}

}
}

 
