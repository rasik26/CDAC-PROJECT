import React, { useState, useEffect } from 'react';
import AddressCard from '../AddressCard/AddressCard';
import { Button } from '@mui/material';
import CartItem from '../Cart/CartItem';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';

const OrderSummary = () => {
  const [cartData, setCartData] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [deliveryCharge] = useState(99);
  const [sessionId, setSessionId] = useState(null); 

  const fetchCartData = async () => {
    try {
      const userId = sessionStorage.getItem('id');
      const authToken = sessionStorage.getItem('token');
      const response = await axios.get(`http://localhost:5454/api/carts/${userId}`, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
      setCartData(response.data.products);
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);

  useEffect(() => {
    if (cartData) {
      // Calculate total price
      const totalPrice = cartData.reduce((total, item) => total + item.discountedPrice, 0);
      setTotalPrice(totalPrice);

      // Calculate discount (assuming it's a constant)
      const discount = 200;
      setDiscount(discount);
    }
  }, [cartData]);

  const totalAmount = totalPrice - discount + deliveryCharge;

  const initiatePayment = async () => {
    try {
      const userId = sessionStorage.getItem('id');
      const authToken = sessionStorage.getItem('token');
      const response = await axios.post(`http://localhost:5454/api/carts/${userId}/payment`, {}, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
      setSessionId(response.data); // Update sessionId state
    } catch (error) {
      console.error('Error initiating payment:', error);
    }
  };

  useEffect(() => {
    if (sessionId) {
      const stripePromise = loadStripe('pk_test_51OlTgDSA5CvMmqRWz2YYk0JgDMXWw5GL5UJhQmGFYP3Ea9XSTx3iWGK3jNWEFAGgACvTSvMCAHgj3wWcdeMqADKJ00vgN8M5hX'); // Replace with your publishable key
      stripePromise.then(stripe => {
        stripe.redirectToCheckout({
          sessionId: sessionId
        }).then(result => {
          if (result.error) {
            console.error('Error redirecting to checkout:', result.error.message);
          }
        });
      });
    }
  }, [sessionId]);

  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
        <AddressCard />
      </div>

      <div>
        <div className='lg:grid grid-cols-3 lg:px-16 relative'>
          <div className='col-span-2'>
            {cartData && cartData.map((item) => (
              <CartItem key={item.id} items={item} updateCart={fetchCartData} />
            ))}
          </div>
          <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
            <div className='border'>
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
                <Button onClick={initiatePayment} variant='contained' className='w-full mt-5' sx={{ px: "2rem", py: "1rem", bgcolor: "#9155fd" }}>
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
