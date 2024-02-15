
package com.artgallery.cdacproj.service;

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
        User user = userRepository.findById(userId).orElse(null);
        if (user == null) {
            throw new IllegalArgumentException("User not found with ID: " + userId);
        }
        Cart cart = new Cart();
        cart.setUser(user);
        return cartRepository.save(cart);
    }

    @Override
    @Transactional
    public Cart addToCart(Long userId, Long productId) {
        Cart cart = findByUserId(userId);
        if (cart == null) {
            cart = createCartForUser(userId);
        }
        Product product = productService.findById(productId);
        if (product == null) {
            throw new IllegalArgumentException("Product not found with ID: " + productId);
        }
        cart.addProduct(product);
        return cartRepository.save(cart);
    }

    @Override
    @Transactional
    public Cart removeFromCart(Long userId, Long productId) {
        Cart cart = findByUserId(userId);
        if (cart == null) {
            throw new IllegalArgumentException("Cart not found for user with ID: " + userId);
        }
        Product product = productService.findById(productId);
        if (product == null) {
            throw new IllegalArgumentException("Product not found with ID: " + productId);
        }
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
