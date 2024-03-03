import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = ({items}) => {
    const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md  hover:shadow-2xl'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            
           <Grid item xs={6}>
            <div className='flex cursor-pointer'>
                <img className="w-[5rem] h-[5rem] object-cover object-top" src={items.imageUrl} alt="painting not found"/>
                <div className='ml-5 space-y-2'>

                    <p className="">{items.title}</p>
                    <p classname="">{items.artistName}</p>
                </div>
            </div>

           </Grid>
                
                <Grid item xs={2}>
                    <p>₹{items.discountedPrice}</p>
                </Grid>

                <Grid item xs={4}>
                    { true &&
                      <div>
                           <p>
                        <AdjustIcon sx={{width:"15px",height:"15px"}} 
                        className='text-green-600 mr-2 text-sm'/>
                        <span>
                        Expected Delivery On March 1
                        </span>
                    </p>
                    <p className='text-xs'>
                    Expected Delivery On March 1
                    </p>
                      </div>
                    }

                    { false && <p>
                        <span>
                            Expected Delivery On March 1
                        </span>
                    </p>}
                </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard