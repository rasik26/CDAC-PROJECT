import React from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const CartItem = ({ items,updateCart }) => {

  const handleDelete = async () => {
    try {
      const userId = sessionStorage.getItem('id');
      const artId = items.id;
  
      const authToken = sessionStorage.getItem('token');
  
      const config = {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      };
  
      const response = await axios.delete(
        `http://localhost:5454/api/carts/${userId}/art/${artId}`,
        config
      );
  
      console.log('Product deleted successfully:', response.data);
      updateCart();
    } catch (error) {
      console.error('Error removing from cart:', error);
      alert('An error occurred while removing item from cart. Please try again later.');
    }
  };
  

  return (
    <div className='p-5 mb-5 shadow-lg border rounded-md relative'>
      <div className="flex justify-start">
      <IconButton
          aria-label="delete"
          onClick={handleDelete}
          style={{ backgroundColor: 'red', color: 'white', position: 'absolute', top: 0, left: 0 }}
          size="small"
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </div>
      <div className='flex items-center'>
        <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
          <img className='w-full h-full object-cover object-top' src={items.imageUrl} alt='Painting not available'/>
        </div>
       
        <div className='ml-5 space-y-1'>
          <p className='font-semibold'>{items.title}</p>
          <p className='opacity-70 mt-2'>Artist: {items.artistName}</p>
          <div className='flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6'>
            <p className='font-semibold'>₹{items.discountedPrice}</p>
            <p className='opacity-50 line-through'>₹{items.price}</p>
            <p className='text-green-600 font-semibold'>{items.discountPercentage}% off</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
