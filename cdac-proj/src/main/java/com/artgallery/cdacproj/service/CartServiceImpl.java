
package com.artgallery.cdacproj.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.artgallery.cdacproj.dao.CartDao;
import com.artgallery.cdacproj.dao.UserDao;
import com.artgallery.cdacproj.model.Cart;
import com.artgallery.cdacproj.model.Product;
import com.artgallery.cdacproj.model.User;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private CartDao cartRepository;

    @Autowired
    private UserDao userRepository;

    @Autowired
    private ProductService productService;

    @Override
    public Cart findByUserId(Long userId) {
        return cartRepository.findByUserId(userId);
    }

    @Override
    public Cart createCartForUser(Long userId) {
        // Check if a cart already exists for the user
        Cart existingCart = findByUserId(userId);
        if (existingCart != null) {
            return existingCart;
        }

        // Retrieve the user by ID
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found with ID: " + userId));

        // Create a new cart and associate it with the user
        Cart newCart = new Cart(user);

        // Save the new cart to the database
        return cartRepository.save(newCart);
    }


    @Override
    @Transactional
    public Cart addToCart(Long userId, Long artId) {
        Cart cart = findByUserId(userId);
        if (cart == null) {
            cart = createCartForUser(userId);
        }
        
        // Retrieve the product from the Optional
        Optional<Product> optionalProduct = productService.findById(artId);
        if (optionalProduct.isEmpty()) {
            throw new IllegalArgumentException("Product not found with ID: " + artId);
        }
        Product product = optionalProduct.get();
        
        // Add the product to the cart
        cart.addProduct(product);
        
        // Save and return the updated cart
        return cartRepository.save(cart);
    }

    
    
    @Override
    @Transactional
    public Cart removeFromCart(Long userId, Long productId) {
        Cart cart = findByUserId(userId);

        if (cart == null) {
            throw new IllegalArgumentException("Cart not found for user with ID: " + userId);
        }

        Optional<Product> optionalProduct = productService.findById(productId);

        if (optionalProduct.isEmpty()) {
            throw new IllegalArgumentException("Product not found with ID: " + productId);
        }

        Product product = optionalProduct.get();
        
        cart.removeProduct(product);

        return cartRepository.save(cart);
    }


    @Override
    @Transactional
    public Cart clearCart(Long userId) {
        Cart cart = findByUserId(userId);
        if (cart != null) {
            cart.clearProducts();
            return cartRepository.save(cart);
        }
        return null;
    }

    @Override
    @Transactional
    public Cart updateCartTotal(Long userId) {
        Cart cart = findByUserId(userId);
        if (cart != null) {
            cart.updateTotal();
            return cartRepository.save(cart);
        }
        return null;
    }


}
