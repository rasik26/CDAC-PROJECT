import React from 'react'

const CartItem = () => {
  return (
    <div className='p-5 shadow-lg border rounded-md'>
        <div className='flex items-center'>
            <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                <img className='w-full h-full object-cover object-top' src='https://eoinoconnor.com/cdn/shop/collections/LOOPYLUPINSJPG_1600x.jpg?v=1699459121'
                  alt='Painting not avaliable'/>
            </div>
           
           <div className='ml-5 space-y-1'>
            <p className='font-semibold'>Black painting</p>
            <p className='opacity-70'>Size: L,white</p>
            <p className='opacity-70 mt-2'>Seller: Crishtaliyo Painting</p>
            <div className='flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6'>
                <p className='font-semibold'>₹2250</p>
                <p className='opacity-50 line-through'>₹2500</p>
                <p className='text-green-600 font-semibold'>10% off</p>
              </div>
           </div>
        </div>
    </div>
  )
}

export default CartItem