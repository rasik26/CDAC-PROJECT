package com.artgallery.cdacproj.service;

import java.util.List;

import com.artgallery.cdacproj.model.*;

public interface OrderService {
	Orders getorderbyCartid(Long cartid);// if order

	List<Orders> getallorder();

}
