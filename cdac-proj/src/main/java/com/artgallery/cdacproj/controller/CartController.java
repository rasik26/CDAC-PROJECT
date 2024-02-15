package com.artgallery.cdacproj.controller;


import com.artgallery.cdacproj.model.Cart;
import com.artgallery.cdacproj.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/carts")
public class CartController {

    private final CartService cartService;

    @Autowired
    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @GetMapping("/{userId}")
    public Cart getCartByUserId(@PathVariable Long userId) {
        return cartService.findByUserId(userId);
    }

    @PostMapping("/{userId}/products/{productId}")
    public Cart addProductToCart(@PathVariable Long userId, @PathVariable Long productId) {
        return cartService.addToCart(userId, productId);
    }

    @DeleteMapping("/{userId}/products/{productId}")
    public Cart removeProductFromCart(@PathVariable Long userId, @PathVariable Long productId) {
        return cartService.removeFromCart(userId, productId);
    }

    @DeleteMapping("/{userId}/clear")
    public Cart clearCart(@PathVariable Long userId) {
        return cartService.clearCart(userId);
    }
}

