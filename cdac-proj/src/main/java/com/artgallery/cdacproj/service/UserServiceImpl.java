package com.artgallery.cdacproj.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.artgallery.cdacproj.dao.UserDao;
import com.artgallery.cdacproj.model.User;

@Service
public class UserServiceImpl implements UserDetailsService,UserService{

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

	@Override
	public Optional<User> findUserById(Long userId) throws UserException {
		
		return userDao.findById(userId);
	}

	@Override
	public User findUserProfileByJwt(String jwt) throws UserException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<User> getAllUsers() {
		List<User> ulist = userDao.findAll();
		return ulist;
	}

	@Override
	public User findUserByEmail(String email) throws UserException {
		
		return userDao.findByEmail(email);
	}

	@Override
	public void changeUserRole(Long userId, String newRole) {
		User user = userDao.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
        
        user.setRole(newRole);
        userDao.save(user);
		
	}

}
