package com.artgallery.cdacproj.controller;

import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.artgallery.cdacproj.config.JwtProvider;
import com.artgallery.cdacproj.dao.UserDao;
import com.artgallery.cdacproj.model.User;
import com.artgallery.cdacproj.request.LoginRequest;
import com.artgallery.cdacproj.response.AuthResponse;
import com.artgallery.cdacproj.service.UserException;
import com.artgallery.cdacproj.service.UserServiceImpl;

@RestController
@RequestMapping("/auth")
public class AuthController {

	private UserDao userRepository;
	private JwtProvider jwtProvider;
	private PasswordEncoder passwordEncoder;
	private UserServiceImpl customUserDetails;
	
	public AuthController(UserDao userRepository,PasswordEncoder passwordEncoder,UserServiceImpl customUserDetails,JwtProvider jwtProvider) {
		this.userRepository=userRepository;
		this.passwordEncoder=passwordEncoder;
		this.customUserDetails=customUserDetails;
		this.jwtProvider=jwtProvider;
		

	}
	@PostMapping("/signup")
	public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user) throws UserException{
		
	  	String email = user.getEmail();
        String password = user.getPassword();
        String firstName=user.getFirstname();
        String lastName=user.getLastname();
        String role=user.getRole();
        
        User isEmailExist=userRepository.findByEmail(email);

       
        if (isEmailExist!=null) {
        	
            throw new UserException("Email Is Already Used With Another Account");
        }


		User createdUser = new User();
		createdUser.setFirstname(firstName);
		createdUser.setLastname(lastName);
		createdUser.setEmail(email);
        createdUser.setPassword(passwordEncoder.encode(password));
        
        User savedUser= userRepository.save(createdUser);
        

        Authentication authentication = new UsernamePasswordAuthenticationToken(savedUser.getEmail(), savedUser.getPassword());
        
        SecurityContextHolder.getContext().setAuthentication(authentication);
        
        String token = jwtProvider.generateToken(authentication);

        AuthResponse authResponse= new AuthResponse();
        authResponse.setJwt(token);
        authResponse.setStatus("Success signup");
        
        
        User u =userRepository.findByEmail(savedUser.getEmail());
        long id = u.getId();
        authResponse.setId(id);
		
        return new ResponseEntity<AuthResponse>(authResponse,HttpStatus.CREATED);
	
}
	
	
	@PostMapping("/login")
    public ResponseEntity<AuthResponse> signin(@RequestBody LoginRequest loginRequest) {
        String username = loginRequest.getEmail();
        String password = loginRequest.getPassword();
        
        
        Authentication authentication = authenticate(username, password);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        
        
        User u =userRepository.findByEmail(username);
        long id = u.getId();
        String role = u.getRole();
        
        String token = jwtProvider.generateToken(authentication);
        AuthResponse authResponse= new AuthResponse(token,"Login Success",username,id,role);
        
        
		
		//authResponse.setStatus(true);
		//authResponse.setJwt(token);
		
        return new ResponseEntity<AuthResponse>(authResponse,HttpStatus.CREATED);
    }
	
	
	private Authentication authenticate(String username, String password) {
        UserDetails userDetails = customUserDetails.loadUserByUsername(username);
        
        
        if (userDetails == null) {
            throw new BadCredentialsException("Invalid username or password");
        }
        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
            throw new BadCredentialsException("Invalid username or password");
        }
        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }
}
