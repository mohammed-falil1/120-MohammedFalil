package com.marticus.employee_management.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.marticus.employee_management.entity.UserEntity;
import com.marticus.employee_management.service.EmployeeManagementService;

@RestController
@RequestMapping("/api/user")
public class UserRestController {
	
	@Autowired
	EmployeeManagementService employeeManagementService;
	
	@PostMapping("/create")
	public ResponseEntity<String> createUser(@RequestBody UserEntity userEntity)
	{
		String response = employeeManagementService.createUser(userEntity);
		
		return ResponseEntity.status(HttpStatus.CREATED).body(response);
		
	}
	
	@PutMapping("/update")
	public ResponseEntity<String> updateUser(@RequestBody UserEntity userEntity)
	{
		String response = employeeManagementService.update(userEntity);
	
		return ResponseEntity.ok(response);
	}
	
	@DeleteMapping("/delete")
	public ResponseEntity<String> deleteUser(@RequestParam int id)
	{
		String response = employeeManagementService.deleteUser(id);
		return ResponseEntity.ok(response);
	}
	
	@GetMapping("/users")
	public ResponseEntity<String> getUsers()
	{
		String response;
		response = employeeManagementService.findAll();
		return ResponseEntity.ok(response);
	}
	
	@GetMapping("/id/{id}")
	public ResponseEntity<String> getUserById(@PathVariable int id)
	{
		String response = employeeManagementService.findUsersById(id);
		return ResponseEntity.ok(response);
	}
	
	@GetMapping("/{userName}")
	public ResponseEntity<String> findUsersByUserName(@PathVariable String userName)
	{
		String response = employeeManagementService.findUsersByUserName(userName);
		return ResponseEntity.ok(response);
	}
	

}
