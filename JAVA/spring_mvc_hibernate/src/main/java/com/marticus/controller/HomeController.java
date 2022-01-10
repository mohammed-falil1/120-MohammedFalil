package com.marticus.controller;

import java.text.DateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.Locale;

import org.hibernate.Session;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.marticus.Dao.UserDao;
import com.marticus.model.User;
import com.marticus.service.UserService;
import com.marticus.utility.HibernateUtil;
import java.util.List;



@Controller
public class HomeController {

	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String index(Locale locale, Model model) {
		System.out.println("Home Page Requested, locale = " + locale);
		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);

		String formattedDate = dateFormat.format(date);

//		model.addAttribute("serverTime", formattedDate);

		return "redirect:/getUsersList";
	}
	
	@RequestMapping(value = "/home", method = RequestMethod.GET)
	public String home( ) {
		
		return "home";
	}
 
	@RequestMapping(value = "/user", method = RequestMethod.POST)
	public String user(@Validated User user, Model model) {
		
		System.out.println("User Page Requested");
		System.out.println("model class = "+model.getClass());
//		Session session=com.marticus.utility.HibernateUtil.
//				getSessionFactory().openSession();
//		session.beginTransaction();
//		
//		model.addAttribute("userName", user.getUserName());
//		model.addAttribute("userId", user.getId());
//		model.addAttribute("userEmail",user.getUserEmail());
//		session.save(user);
//		session.getTransaction().commit();
//		session.close();
//		HibernateUtil.shutdown();
		UserService userService = new UserService();
		UserDao userDao = new UserDao();
		userService.setUserDao(userDao);
		userService.addUser(user, model);
		
		return "user";
	}
	
	@RequestMapping(value = "/search", method = RequestMethod.POST)
	public String search(@Validated User user, Model model) {
		
		System.out.println("Search Page Requested");
		return "search";
	}
	
	@RequestMapping(value = "/getSearchResults", method = RequestMethod.GET)
	public String getUser(@Validated User user, Model model) {
		
		System.out.println("getSearchResult  Page Requested");
		
//		Session session=com.marticus.utility.HibernateUtil.
//				getSessionFactory().openSession();
//
//		session.beginTransaction();
//		 User user1 = (User) session.load(User.class, new Integer(user.getId()));
//		 model.addAttribute("userName", user1.getUserName());
//			model.addAttribute("userId", user1.getId());
//			model.addAttribute("userEmail",user1.getUserEmail());
//		session.getTransaction().commit();
//		session.close();
		//HibernateUtil.shutdown();
//		 UserDao userDao = new UserDao();
//		 userDao.get(user,model);
		return "getSearchResults";
	}
	
	@RequestMapping(value = "/getUsersList", method = RequestMethod.GET)
	public String getUserList(@Validated User user, Model model) {
		
		System.out.println("getUserList  Page Requested");
		
//		Session session=com.marticus.utility.HibernateUtil.
//				getSessionFactory().openSession();
//		session.beginTransaction();
//		List Users =session.createQuery("From User").list();
//		ArrayList <User> uList = new ArrayList<User>();
//		for (Iterator iterator2 = Users.iterator(); iterator2.hasNext();){
//            User u = (User) iterator2.next(); 
//            uList.add(u);
//            System.out.println("User: " + u.getId()); 
//         }
//		model.addAttribute("uList",uList );
//		
//		session.getTransaction().commit();
//		session.close();
		//HibernateUtil.shutdown();
		UserService userService = new UserService();
		UserDao userDao = new UserDao();
		userService.setUserDao(userDao);
		userService.getUserList(user, model);
		 
		return "getUsersList";


	}
	
	@RequestMapping(value = "/updateList/{id}", method = RequestMethod.GET)
	public String updateScreen(@PathVariable("id")String id, Model model) {
		
		System.out.println("updateList  Page Requested");
//		
//		Session session=com.marticus.utility.HibernateUtil.
//				getSessionFactory().openSession();
//		session.beginTransaction();
//		User user=new User();
//		user.setId(Integer.parseInt(id));
//		session.load(user,new Integer(user.getId()));
//		 model.addAttribute("userName", user.getUserName());
//			model.addAttribute("userId", user.getId());
//			model.addAttribute("userEmail",user.getUserEmail());
//		session.getTransaction().commit();
//		session.close();

		
		//HibernateUtil.shutdown();
		UserService userService = new UserService();
		UserDao userDao = new UserDao();
		userService.setUserDao(userDao);
		userService.updateScreen(model, id);
		 
		return "updateList";
	}
	
	@RequestMapping(value = "/delete/{id}", method = RequestMethod.GET)
	public String delete(@PathVariable("id")String id, Model model) {
		
		System.out.println("updateList  Page Requested");
		
//		Session session=com.marticus.utility.HibernateUtil.
//				getSessionFactory().openSession();
//		session.beginTransaction();
//		User user=new User();
//		user.setId(Integer.parseInt(id));
//		session.delete(user);
//		session.getTransaction().commit();
//		session.close();

		//HibernateUtil.shutdown();
		UserService userService = new UserService();
		UserDao userDao = new UserDao();
		userService.setUserDao(userDao);
		userService.deleteUser(id);
		 
		 
		return "redirect:/getUsersList";
	}
	
	

	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public String update(@Validated User user, Model model) {
		
//		System.out.println("User Page Requested");
//		System.out.println("Userr Id="+user.getId());
//		//user.setId(Integer.parseInt(id));
//		
//		System.out.println("inside update: "+user.getId());
//		System.out.println("inside update: "+user.getUserName());
//		System.out.println("inside update: "+user.getUserEmail());
//		Session session=com.marticus.utility.HibernateUtil.
//				getSessionFactory().openSession();
//		session.beginTransaction();
//		
//		session.update(user);
//		session.getTransaction().commit();
//		session.close();
		//HibernateUtil.shutdown();
		UserService userService = new UserService();
		UserDao userDao = new UserDao();
		userService.setUserDao(userDao);
		userService.update(user);

		return "redirect:/getUsersList";
	}
	
	
	
	
	
	
	
}
