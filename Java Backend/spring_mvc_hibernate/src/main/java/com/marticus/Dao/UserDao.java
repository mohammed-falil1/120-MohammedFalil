package com.marticus.Dao;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.hibernate.Session;
import org.springframework.ui.Model;

import com.marticus.model.User;
import com.marticus.utility.HibernateUtil;

public class UserDao {
	
	public void addUser(User user,Model model)
	{
		Session session = HibernateUtil.getSessionFactory().openSession();
		session.beginTransaction();
		model.addAttribute("userName",user.getUserName());
		model.addAttribute("userId",user.getId());
		model.addAttribute("userEmail",user.getUserEmail());
		session.save(user);
		session.getTransaction().commit();
		session.close();
		
	}
	
	public void getUserList(User user,Model model)
	{
		Session session=com.marticus.utility.HibernateUtil.
				getSessionFactory().openSession();
		session.beginTransaction();
		List Users =session.createQuery("From User").list();
		ArrayList <User> uList = new ArrayList<User>();
		for (Iterator iterator2 = Users.iterator(); iterator2.hasNext();){
            User u = (User) iterator2.next(); 
            uList.add(u);
            System.out.println("User: " + u.getId()); 
         }
		model.addAttribute("uList",uList );
		
		session.getTransaction().commit();
		session.close();
	}
	
	public void updateScreen(Model model,String id)
	{
		Session session=com.marticus.utility.HibernateUtil.
				getSessionFactory().openSession();
		session.beginTransaction();
		User user=new User();
		user.setId(Integer.parseInt(id));
		session.load(user,new Integer(user.getId()));
		 model.addAttribute("userName", user.getUserName());
			model.addAttribute("userId", user.getId());
			model.addAttribute("userEmail",user.getUserEmail());
		session.getTransaction().commit();
		session.close();

		
	}
	public void update(User user)
	{
		System.out.println("inside update: "+user.getId());
		System.out.println("inside update: "+user.getUserName());
		System.out.println("inside update: "+user.getUserEmail());
		Session session=com.marticus.utility.HibernateUtil.
				getSessionFactory().openSession();
		session.beginTransaction();
		
		session.update(user);
		session.getTransaction().commit();
		session.close();
	}
	
	
	public void deleteUser(String id)
	{
		

		Session session=com.marticus.utility.HibernateUtil.
				getSessionFactory().openSession();
		session.beginTransaction();
		User user=new User();
		user.setId(Integer.parseInt(id));
		session.delete(user);
		session.getTransaction().commit();
		session.close();
	}
	
	public void user(Model model,User user)
	{
		Session session=com.marticus.utility.HibernateUtil.
				getSessionFactory().openSession();
		session.beginTransaction();
		
		model.addAttribute("userName", user.getUserName());
		model.addAttribute("userId", user.getId());
		model.addAttribute("userEmail",user.getUserEmail());
		session.save(user);
		session.getTransaction().commit();
		session.close();
//		HibernateUtil.shutdown();
	}
	

}
