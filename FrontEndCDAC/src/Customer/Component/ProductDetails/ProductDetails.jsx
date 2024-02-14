
import { useState } from 'react'

import { Button } from '@mui/material'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'
import { paintings } from '../../Data/paintings'
import { useNavigate } from 'react-router-dom'

const product = {
  name: 'Running Horse',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Painting', href: '#' },
    { id: 2, name: 'Artist', href: '#' },
  ],
  images: [
    {
      src: 'https://royalthaiart.com/wp-content/uploads/2019/02/horse-painting-acrylic-for-sale-1020x1024.jpg',
      alt: 'Painting Not Avaliable.',
    },
    {
      src: 'https://i.etsystatic.com/15831845/r/il/387934/3032062592/il_570xN.3032062592_e10u.jpg',
      alt: 'Painting Not Avaliable.',
    },
    {
      src: 'https://eoinoconnor.com/cdn/shop/collections/LOOPYLUPINSJPG_1600x.jpg?v=1699459121',
      alt: 'Painting Not Avaliable.',
    },
    {
      src: 'https://assets.bluethumb.com.au/media/image/thumbnail/5000/415/eyJpZCI6InVwbG9hZHMvbGlzdGluZy81MzE5MTkvY2F0aHktamFjb2JzLXJlc2VydmVkLWZvci1qZW4tYmx1ZXRodW1iLTc5OTQuSlBHIiwic3RvcmFnZSI6InN0b3JlIiwibWV0YWRhdGEiOnsiZmlsZW5hbWUiOiJjYXRoeS1qYWNvYnMtcmVzZXJ2ZWQtZm9yLWplbi1ibHVldGh1bWItNzk5NC5KUEciLCJtaW1lX3R5cGUiOm51bGx9fQ?signature=60f99f125efe858949f17800c0c180f5758197976825a2261fd9d682d823958d',
      alt: 'Painting Not Avaliable.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {
 const navigate = useNavigate();

  const handleaddtocart = ()=>{
  navigate("/cart")
  }
  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-y-10 px-4 pt-10'>

          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center">
              {product.images.map((item) => <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover object-center"
                />
              </div>)}

            </div>

          </div>
          {/* Product info */}
          <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8
               lg:pb-24">
            <div className="lg:col-span-2 ">
              <h1 className="text-lg lg:text-xl font-semibold text-gray-900">Painting</h1>
              <h1 className='text-lg lg:text-xl text-gray-900 opacity-60 pt-1'>
                painting Name
              </h1>
              <h1 className="text-lg lg:text-xl font-semibold text-gray-900">Artist Name</h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>

              <div className='flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6'>
                <p className='font-semibold'>₹2250</p>
                <p className='opacity-50 line-through'>₹2500</p>
                <p className='text-green-600 font-semibold'>10% off</p>
              </div>

              {/* Reviews */}
              

              <form className="mt-10">
                {/* Colors */}
                

                {/* Sizes */}
                

                <Button onClick={handleaddtocart} variant='contained' sx={{px:"2rem",py:"1rem",bgcolor:"#9155fd"}}>
                  Add to Cart
                </Button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div className='py-10'>
                <div className="space-y-1">
                <h3 className="text-sm font-medium text-gray-900"> Painting Description</h3>
                  <p className="text-base text-gray-900">{product.description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

          <section className='py-10'>

            <h1 className='py-5 px-5 text-xl font-bold'>Similar Products</h1>
            <div className='flex flex-wrap space-y-5'>
              {paintings.map((item)=><HomeSectionCard product={item} />)}
            </div>
          </section>
            
      </div>
    </div>
  )
}
