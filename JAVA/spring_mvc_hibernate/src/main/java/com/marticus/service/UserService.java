package com.marticus.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.hibernate.Session;
import org.springframework.ui.Model;

import com.marticus.Dao.UserDao;
import com.marticus.model.User;
import com.marticus.utility.HibernateUtil;

public class UserService {
	
	private UserDao userDao;
	
	public void setUserDao(UserDao userDao)
	{
		this.userDao=userDao;
	}
	
	public void addUser(User user,Model model)
	{
		userDao.addUser(user, model);
	}
	
	public void getUserList(User user,Model model)
	{
		userDao.getUserList(user, model);
	}
	
	public void updateScreen(Model model,String id)
	{
		userDao.updateScreen(model, id);

		
	}
	public void update(User user)
	{
		userDao.update(user);
	}
	
	
	public void deleteUser(String id)
	{
		

		userDao.deleteUser(id);
	}
	
	public void user(Model model,User user)
	{
		userDao.user(model, user);
	}
	

}
