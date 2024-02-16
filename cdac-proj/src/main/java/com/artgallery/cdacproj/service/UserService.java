package com.artgallery.cdacproj.service;

import java.util.List;
import java.util.Optional;

import com.artgallery.cdacproj.model.User;

public interface UserService {

	public Optional<User> findUserById(Long userId) throws UserException;
	
	public User findUserByEmail(String email) throws UserException;
	
	public User findUserProfileByJwt(String jwt) throws UserException;

	public List<User> getAllUsers();

	public void changeUserRole(Long userId, String string);

	
}
