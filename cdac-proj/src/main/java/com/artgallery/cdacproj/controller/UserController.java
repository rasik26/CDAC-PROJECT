package com.artgallery.cdacproj.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.artgallery.cdacproj.model.User;
import com.artgallery.cdacproj.service.UserService;

@RequestMapping("/")
@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/users")  //for find All Users
	public ResponseEntity<List<User>> getAllUsers(){
		List<User> plist =userService.getAllUsers();
		return ResponseEntity.ok(plist);
	}
	

}
