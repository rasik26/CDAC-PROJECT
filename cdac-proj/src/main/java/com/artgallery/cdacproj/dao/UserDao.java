package com.artgallery.cdacproj.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.artgallery.cdacproj.model.User;

public interface UserDao extends JpaRepository<User,Long>{
	
	public User findByEmail(String email);

}
