package com.artgallery.cdacproj.service;

import java.util.List;

import com.artgallery.cdacproj.model.Cart;
import com.artgallery.cdacproj.model.Product;

public interface CartService {
	
    Cart findByUserId(Long userId);
    
    Cart createCartForUser(Long userId);
    
    Cart addToCart(Long userId, Long productId);
    
    Cart removeFromCart(Long userId, Long productId);
    
    Cart clearCart(Long userId);
    
    Cart updateCartTotal(Long userId);

}
