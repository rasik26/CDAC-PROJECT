package com.artgallery.cdacproj.model;
import jakarta.persistence.*;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToMany
    @JoinTable(
            name = "cart_product",
            joinColumns = @JoinColumn(name = "cart_id"),
            inverseJoinColumns = @JoinColumn(name = "product_id")
    )
    private List<Product> products = new ArrayList<>();

    @Column(name = "total", columnDefinition = "DECIMAL(10, 2)")
    private Double total;


    public Cart() {
    }

    public Cart(User user) {
        this.user = user;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Product> getProducts() {
        return products;
    }

    public void setProducts(List<Product> products) {
        this.products = products;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    public void addProduct(Product product) {
        if (!products.contains(product)) {
            products.add(product);
            updateTotal();
        }
    }

    public void removeProduct(Product product) {
        products.remove(product);
        updateTotal();
    }

    public void clearProducts() {
        products.clear();
        updateTotal();
    }

    public void updateTotal() {
    	Double newTotal = 0.0;
        for (Product product : products) {
            newTotal += product.getPrice();
        }
        this.total = newTotal;
    }
}
