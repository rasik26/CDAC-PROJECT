package com.artgallery.cdacproj.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.artgallery.cdacproj.dao.UserDao;
import com.artgallery.cdacproj.model.User;

@Service
public class UserServiceImpl implements UserDetailsService{

	@Autowired
	private UserDao userDao;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userDao.findByEmail(username);
		if(user==null)
		{
			throw new UsernameNotFoundException("User not found with email "+username);
		}
		
		List <GrantedAuthority> authorities = new ArrayList<>();
		return new org.springframework.security.core.userdetails.User(user.getEmail(),user.getPassword(),authorities);
	}

}
