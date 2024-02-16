package com.artgallery.cdacproj.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.artgallery.cdacproj.model.Artist;

public interface ArtistDao extends JpaRepository<Artist, Integer> {
	List<Artist> findAll();

}
