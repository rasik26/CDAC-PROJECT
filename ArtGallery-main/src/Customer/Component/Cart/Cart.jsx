import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CartItem from './CartItem';
import { Button, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import emptycart from '../../Data/emptyCart.gif';

const Cart = () => {
    const navigate = useNavigate();
    const [cartData, setCartData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const fetchCartData = async () => {
      try {
        const userId = sessionStorage.getItem('id');
        const authToken = sessionStorage.getItem('token');
        const config = {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        };
  
        const response = await axios.get(`http://localhost:5454/api/carts/${userId}`, config);
        setCartData(response.data.products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cart data:', error);
        setError(error);
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchCartData();
    }, []); 
  
    const handleCheckout = () => {
      navigate('/cart/checkout?step=2');
    };
    

    const handleClearCart = async () => {
      try {
        const userId = sessionStorage.getItem('id');        
        const authToken = sessionStorage.getItem('token');
      
        const config = {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        };
      
        const response = await axios.delete(
          `http://localhost:5454/api/carts/${userId}/clear`,
          config
        );
      
        console.log('Cart Cleared successfully:', response.data);
        setCartData([]);
      } catch (error) {
        console.error('Error clearing cart:', error);
        alert('An error occurred while clearing cart. Please try again later.');
      }
    };
    
    const totalPrice = cartData ? cartData.reduce((total, item) => total + item.discountedPrice, 0) : 0;

    const discount = 200;
    const deliveryCharge = 99;
    const totalAmount = totalPrice - discount + deliveryCharge;
    
    return (
        <div>
            <div className='lg:grid grid-cols-3 lg:px-16 relative'>
            <div className='col-span-2 mt-5'>
  {loading ? (
    <CircularProgress />
  ) : error ? (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img  src={emptycart} alt="Empty Cart" style={{ width: '80%', maxWidth: '300px', height: 'auto' ,marginBottom:'100px',marginTop:'150px',marginLeft:'400px'}} />
    </div>
  ) : !cartData || cartData.length === 0 ? ( 
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <img  src={emptycart} alt="Empty Cart" style={{ width: '80%', maxWidth: '300px', height: 'auto' ,marginBottom:'100px',marginTop:'150px',marginLeft:'400px'}} />
    </div>
  ) : (
    cartData.map((item) => (
      <CartItem key={item.id} items={item} updateCart={fetchCartData} />
    ))
  )}
</div>

                {cartData.length > 0 && (
                  <div className='px-5 py-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                  <Button onClick={handleClearCart} variant='contained' className='w-full py-5' sx={{ px: "2rem", py: "1rem", bgcolor: "#9155fd" }}>
                    Clear cart
                  </Button>
                  <div className='py-5'>
                    <p className='uppercase font-bold opacity-60 pb-4'>Price details</p>
                    <hr />
                    <div className='space-y-3 font-semibold mb-10'>
                      <div className='flex justify-between pt-3 text-black'>
                        <span>Price</span>
                        <span>₹{totalPrice}</span>
                      </div>
                      <div className='flex justify-between pt-3 '>
                        <span>Discount</span>
                        <span className='text-green'>₹{discount}</span>
                      </div>
                      <div className='flex justify-between pt-3 '>
                        <span>Delivery Charge</span>
                        <span className='text-green'>₹{deliveryCharge}</span>
                      </div>
                      <div className='flex justify-between pt-3 text-green-600 font-bold'>
                        <span>Total Amount</span>
                        <span className='text-green'>₹{totalAmount}</span>
                      </div>
                      <Button onClick={handleCheckout} variant='contained' className='w-full' sx={{ px: "2rem", py: "1rem", bgcolor: "#9155fd" }}>
                        Checkout
                      </Button>
                    </div>
                  </div>
                </div>
                
                )}
            </div>
        </div>
    );
}

export default Cart;
