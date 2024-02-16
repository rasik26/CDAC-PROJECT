package com.artgallery.cdacproj.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.artgallery.cdacproj.model.User;
import com.artgallery.cdacproj.service.UserService;

@RequestMapping("/api/users")
@RestController
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/all")  //for find All Users
	public ResponseEntity<List<User>> getAllUsers(){
		List<User> plist =userService.getAllUsers();
		return ResponseEntity.ok(plist);
	}
	
    @PutMapping("/{userId}/role")
    public ResponseEntity<String> changeUserRole(@PathVariable Long userId) {
        try {
            userService.changeUserRole(userId, "artist");
            return ResponseEntity.ok("User role updated successfully.");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error updating user role: " + e.getMessage());
        }
    }
	

}
