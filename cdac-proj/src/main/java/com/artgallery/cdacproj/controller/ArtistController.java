package com.artgallery.cdacproj.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.artgallery.cdacproj.model.Artist;
import com.artgallery.cdacproj.service.ArtistService;

@RequestMapping("/")
@RestController
public class ArtistController {
	@Autowired
	ArtistService aservice;

	@GetMapping("/artistid/{id}") // Get Artist By Id
	public ResponseEntity<Artist> getArtistById(@PathVariable int id) {
		Artist a = aservice.getartistById(id);
		if (a != null)
			return ResponseEntity.ok(a);
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
	}

	@GetMapping("/allartist")
	public ResponseEntity<List<Artist>> getAllArtist() {
		List<Artist> allartist = aservice.getAllArtist();
		if (allartist != null)
			return ResponseEntity.ok(allartist);
		else
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();

	}

}
