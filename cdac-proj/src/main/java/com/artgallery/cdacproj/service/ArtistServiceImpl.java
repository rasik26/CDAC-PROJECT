package com.artgallery.cdacproj.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.artgallery.cdacproj.dao.ArtistDao;
import com.artgallery.cdacproj.model.Artist;

@Service
public class ArtistServiceImpl implements ArtistService {

	@Autowired
	private ArtistDao adao;

	@Override
	public Artist getartistById(int id) {
		// TODO Auto-generated method stub
		Optional<Artist> op = adao.findById(id);
		if (op.isPresent())
			return op.get();
		else
			return null;
	}

	@Override
	public List<Artist> getAllArtist() {
		List<Artist> artistList = adao.findAll();

		if(artistList != null) {
			return artistList;
		}
		return null;
	}
	
	

}
