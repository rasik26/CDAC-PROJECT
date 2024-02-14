package com.artgallery.cdacproj.service;

import java.util.List;

import com.artgallery.cdacproj.model.User;

public interface UserService {

	public User findUserById(Long userId) throws UserException;
	
	public User findUserProfileByJwt(String jwt) throws UserException;

	public List<User> getAllUsers();

	
}
