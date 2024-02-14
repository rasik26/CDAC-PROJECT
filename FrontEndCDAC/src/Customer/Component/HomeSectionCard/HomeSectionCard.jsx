import React from 'react';

export default function HomeSectionCard({ product }) {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3'>
      <div className='h-[13rem] w-[15rem]'>
        <img src={product.imageUrl} alt="" className="object-cover w-full h-full" />
      </div>
      <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900'>
          {product.title}
        </h3>
      </div>
      <div className=''>
        <h3 className='font-medium text-gray-900'>
          {product.artist}
        </h3>
      </div>
    </div>
  );
}
