import Navbar from "../Customer/Component/Navigation/Navbar";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Customer/Pages/HomePage";
import Cart from "../Customer/Component/Cart/Cart";
import Footer from "../Customer/Component/Footer/Footer";
import OrderDetails from "../Customer/Component/Order/OrderDetails";
import Order from "../Customer/Component/Order/Order";
import Checkout from "../Customer/Component/Checkout/Checkout";
import Product from "../Customer/Component/Product/Product";
import ProductDetails from "../Customer/Component/ProductDetails/ProductDetails";
import Login from "../Customer/Pages/Login";
import SignUp from "../Customer/Pages/SignUp";
import ArtistPage from "../Customer/Pages/ArtistPage";

const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/art/" element={<Product />}></Route>
        <Route path="/art/:artId" element={<ProductDetails />}></Route>
        <Route path="/cart/checkout" element={<Checkout />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route
          path="/account/order/:orderId"
          element={<OrderDetails />}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/artist" element={<ArtistPage />}></Route>

        {/* <ProductDetails/>
  <Cart/>
  <Checkout/>
    <Order/>
    <OrderDetails/>
      */}
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
