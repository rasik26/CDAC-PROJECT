import Navbar from '../Customer/Component/Navigation/Navbar'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Customer/Pages/HomePage'
import Cart from '../Customer/Component/Cart/Cart'
import Footer from '../Customer/Component/Footer/Footer'
import OrderDetails from '../Customer/Component/Order/OrderDetails'
import Order from '../Customer/Component/Order/Order'
import Checkout from '../Customer/Component/Checkout/Checkout'
import Product from '../Customer/Component/Product/Product'
import ProductDetails from '../Customer/Component/ProductDetails/ProductDetails'
import ArtistPage from '../Customer/Pages/ArtistPage'
import BecomeArtist from '../Customer/Pages/BecomeArtist'
import AddProduct from '../Customer/Pages/AddProduct'
import AboutUs from '../Customer/Pages/AboutUs'
import ArtistProductPage from '../Customer/Pages/ArtistProductPage'
import EditProductForm from '../Customer/Pages/EditProduct'


const CustomerRouters = () => {
  return (
    <div>

        <div>
           <Navbar/> 
        </div>

        <Routes>
          <Route path="/" element={<HomePage/>}></Route>  
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/art/" element={<Product/>}></Route>
            <Route path="/art/:artId" element={<ProductDetails/>}></Route>
            <Route path="/cart/checkout" element={<Checkout/>}></Route>
            <Route path="/account/order" element={<Order/>}></Route>
            <Route path="/account/order/:orderId" element={<OrderDetails/>}></Route>
            <Route path="/aboutus" element={<AboutUs/>}></Route> 
            <Route path="/artist" element={<ArtistPage/>}></Route> 
            <Route path="/artist/:artistName" element={<ArtistProductPage />} /> 
            <Route path="/seller" element={<BecomeArtist/>}></Route> 
            <Route path="/editart" element={<EditProductForm/>}></Route> 
            <Route path="/addproduct" element={<AddProduct/>}></Route>

            

  {/* <ProductDetails/>
  <Cart/>
  <Checkout/>
    <Order/>
    <OrderDetails/>
      */}
          </Routes>
        <div>
           <Footer/> 
        </div> 
      
    </div>
  )
}

export default CustomerRouters