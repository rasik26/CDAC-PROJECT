package com.artgallery.cdacproj.dao;
import java.util.List;

<<<<<<< HEAD
public interface CartDao {
=======
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
>>>>>>> c7eebf0af18954d749c2173ff3978f455b034984

import com.artgallery.cdacproj.model.Cart;

@Repository
public interface CartDao extends JpaRepository<Cart, Long> {
    Cart findByUserId(Long userId);
}

