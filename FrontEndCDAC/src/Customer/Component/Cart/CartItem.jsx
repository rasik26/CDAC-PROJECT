import React from 'react'

const CartItem = ({item}) => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
        <div className='flex items-center'>
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                <img className='w-full h-full object-cover object-top' src={item.imageUrl}
                  alt='Painting not avaliable'/>
            </div>
           
           <div className='ml-5 space-y-1'>
            <p className='font-semibold'>{item.title}</p>
            <p className='opacity-70 mt-2'>Artist: {item.artistName}</p>
            <div className='flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6'>
                <p className='font-semibold'>₹{item.discountedPrice}</p>
                <p className='opacity-50 line-through'>₹{item.price}</p>
                <p className='text-green-600 font-semibold'>{item.discountPercentage}% off</p>
              </div>
           </div>
        </div>
    </div>
  )
}

export default CartItem