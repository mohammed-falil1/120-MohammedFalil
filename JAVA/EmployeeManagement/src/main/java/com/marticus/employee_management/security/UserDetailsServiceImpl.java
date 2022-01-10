package com.marticus.employee_management.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.marticus.employee_management.entity.UserEntity;
import com.marticus.employee_management.repo.UserRepo;
import org.springframework.security.core.userdetails.UserDetailsService;


public class UserDetailsServiceImpl implements UserDetailsService{

	@Autowired
	UserRepo userRepo;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserEntity userEntity = userRepo.findUsersByUserName(username);
		
		if(userEntity==null)
		{
			throw new UsernameNotFoundException("Could not find user");
		}
		return new UserDetailsChecker(userEntity);
	}
	
	
	

}
