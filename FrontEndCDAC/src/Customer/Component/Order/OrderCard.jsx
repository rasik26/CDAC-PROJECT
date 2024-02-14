import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md  hover:shadow-2xl'>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            
           <Grid item xs={6}>
            <div className='flex cursor-pointer'>
                <img className="w-[5rem] h-[5rem] object-cover object-top" src="https://i.etsystatic.com/15831845/r/il/387934/3032062592/il_570xN.3032062592_e10u.jpg" alt="painting not found"/>
                <div className='ml-5 space-y-2'>

                    <p className="">Painting Name</p>
                    <p classname="">Artist Name:Ron</p>
                </div>
            </div>

           </Grid>
                
                <Grid item xs={2}>
                    <p>₹5000</p>
                </Grid>

                <Grid item xs={4}>
                    { true &&
                      <div>
                           <p>
                        <AdjustIcon sx={{width:"15px",height:"15px"}} 
                        className='text-green-600 mr-2 text-sm'/>
                        <span>
                            Delivered On Feb 10
                        </span>
                    </p>
                    <p className='text-xs'>
                        Your item Has Been Delivered
                    </p>
                      </div>
                    }

                    { false && <p>
                        <span>
                            Expected Delivery On Feb 10
                        </span>
                    </p>}
                </Grid>
        </Grid>
    </div>
  )
}

export default OrderCard