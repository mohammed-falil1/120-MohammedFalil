package com.marticus.employee_management.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.marticus.employee_management.entity.UserEntity;
import com.marticus.employee_management.service.EmployeeManagementService;

@Controller
public class AuthenticateController {

	@Autowired
	EmployeeManagementService employeeManagementService;

	
	@GetMapping("/index")
	public String loginPage()
	{
		return "index";
	}
	
	
	@PostMapping("/login")
	public String loginChecker(UserEntity user) {
		boolean isUserPresent = employeeManagementService.authenticateUser(user);
		System.out.println(isUserPresent);
		if (isUserPresent) {
			return "redirect:/emp/";
		}
		return "index";
	}

}
