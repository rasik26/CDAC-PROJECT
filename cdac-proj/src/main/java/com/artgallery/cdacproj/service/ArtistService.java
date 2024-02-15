package com.artgallery.cdacproj.service;

import java.util.List;

import com.artgallery.cdacproj.model.Artist;

public interface ArtistService {

	Artist getartistById(int id);

	List<Artist> getAllArtist();
	

}
