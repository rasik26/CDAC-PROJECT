import React, { useState, useEffect } from 'react';
import AddressCard from '../AddressCard/AddressCard';
import { Button } from '@mui/material';
import CartItem from '../Cart/CartItem';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
  const [cartData, setCartData] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [deliveryCharge] = useState(99);
  const [orderId, setOrderId] = useState(null);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);
  const email = sessionStorage.getItem('firstName');
  const navigate = useNavigate();
  const fetchCartData = async () => {
    try {
      const userId = sessionStorage.getItem('id');
      const authToken = sessionStorage.getItem('token');

      console.log(email);
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
      const totalPrice = cartData.reduce((total, item) => total + item.discountedPrice, 0);
      setTotalPrice(totalPrice);
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
      setOrderId(response.data.orderId);
      if (window.Razorpay) {
        const options = {
          key: 'rzp_test_oimo0nzZmKum31',
          amount: totalAmount * 100,
          currency: 'INR',
          name: 'Art Gallery Purchase',
          description: 'Purchase description',
          order_id: response.data.orderId,
          handler: function (response) {
            console.log(response);
            alert('Payment successful');
            navigate('/')
          },
          prefill: {
            name: 'Customer Name',
            email: email,
            contact: '9999999999'
          },
          notes: {
            address: 'Customer Address'
          },
          theme: {
            color: '#9155fd'
          }
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        console.error('Razorpay SDK not loaded.');
      }
    } catch (error) {
      console.error('Error initiating payment:', error);
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => setRazorpayLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
