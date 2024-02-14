import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Grid } from '@mui/material'

const OrderDetails = () => {
  return (
    <div className='px:5 lg:px-20'>
        <div>
            <h1 className='font-semibold text-xl py-7'>Delivery Address</h1>
        <AddressCard/>
        </div>
        
        <div className='py-20'>
            <OrderTracker activeStep={3}/>
        </div>
        
        <Grid className="space-y-5" container>
             {[1,1,1,1,1].map((items)=><Grid item container className="shadow-xl rounded-md p-5 border" 
              sx={{alignItems:"center",justifyContent:'space-between'}}>
                 
                <Grid item xs={6}>
                     
                     <div className='flex items-center space-x-4'>
                      <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://assets.bluethumb.com.au/media/image/thumbnail/5000/415/eyJpZCI6InVwbG9hZHMvbGlzdGluZy81MzE5MTkvY2F0aHktamFjb2JzLXJlc2VydmVkLWZvci1qZW4tYmx1ZXRodW1iLTc5OTQuSlBHIiwic3RvcmFnZSI6InN0b3JlIiwibWV0YWRhdGEiOnsiZmlsZW5hbWUiOiJjYXRoeS1qYWNvYnMtcmVzZXJ2ZWQtZm9yLWplbi1ibHVldGh1bWItNzk5NC5KUEciLCJtaW1lX3R5cGUiOm51bGx9fQ?signature=60f99f125efe858949f17800c0c180f5758197976825a2261fd9d682d823958d" 
                      alt="" />
                      <div className='space-y-2 ml-5'>
                        <p className='font-semibold'>Painting Name</p>
                        <p className='space-x-5 text-xs font-semibold'>Artist Name: Ron</p>
                        <p>Price: ₹2500</p>
                      </div>
                     </div>
                </Grid>

              </Grid>)}
              

        </Grid>
    </div>
  )
}

export default OrderDetails