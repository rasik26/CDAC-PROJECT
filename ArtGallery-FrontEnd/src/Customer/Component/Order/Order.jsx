import { Grid } from '@mui/material'
import OrderCard from './OrderCard'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const oredrStatus=[
    {label:"On the Way", value:"on_the_way"},
    {label:"Delivered", value:"delivered"},
    {label:"Cancelled", value:"cancelled"},
    {label:"Returned", value:"returned"}
]



const Order = () => {

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
       console.log(response.data.products)
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

  return (
    <div className='px:5 lg:px-20'>
        <Grid container sx={{justifyContent:"space-between"}}>

              <Grid item xs={2.5}>
                   <div className='h-auto shadow-lg bg-white p-5 sticky top-5 mt-5'>

                        <h1 className='font-bold text-lg'>Filter</h1>
                        <div className='space-y-4 mt-10'>
                            <h1 className='font-semibold'>ORDER STATUS</h1>
                          
                           {oredrStatus.map((option)=><div className='flex items-center'>
                               <input defaultValue={option.value} type='checkbox' className='h-4 w-4 border-gray-300 
                               text-indigo-600 focus:ring-indigo-500'/>

                               <label className='ml-3 text-sm text-gray-600' htmlFor={option.value}>
                                    {option.label}
                               </label>
                          </div>)}

                        </div>
                   </div>
              </Grid>
                 <Grid item xs={8}>
                    
                   
                      
                 <div className='space-y-5 py-5'>
  {cartData.map((item, index) => <OrderCard key={index} items={item}/>)}
</div>

                 </Grid>
        </Grid>
    </div>
  )
}

export default Order