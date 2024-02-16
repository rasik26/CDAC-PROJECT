package com.artgallery.cdacproj.dao;




import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.artgallery.cdacproj.model.Cart;

@Repository
public interface CartDao extends JpaRepository<Cart, Long> {
    Cart findByUserId(Long userId);
}

