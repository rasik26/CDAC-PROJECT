import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../Redux/Reducers/cartReducer';
import { Button } from '@mui/material'
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom'

export default function ProductDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state;
  // const [isLoggedIn, setIsLoggedIn] = useState(!!sessionStorage.getItem('id'));
console.log(product)
  const handleAddToCart = async () => {
    // if (!isLoggedIn) {
    //   navigate("/login");
    //   return;
    // }

    try {
      const userId = sessionStorage.getItem('id');
      const artId = product.id;

      const authToken = sessionStorage.getItem('token');

      const config = {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      };
      const response = await axios.post(
        `http://localhost:5454/api/carts/${userId}/art/${artId}`,
        {},
        config
      );

      console.log(response.data);
      sessionStorage.setItem('cart', JSON.stringify(response.data));
      alert('Product added to cart successfully.');
    } catch (error) {
      console.error('Error adding to cart:', error);
      navigate('/login')
    }
  };

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <li key={product.id}>
              <div className="flex items-center">
                <a className="mr-2 text-sm font-medium text-gray-900">
                  Category
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

            <li className="text-sm">
              <a href={product.imageUrl} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.category.name}
              </a>
            </li>
          </ol>
        </nav>
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-y-10 px-4 pt-10'>

          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                src={product.imageUrl}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
            <div className="lg:col-span-2 ">
              <h1 className="text-lg lg:text-xl font-semibold text-gray-900">{product.title}</h1>
              <h1 className="text-lg lg:text-xl font-semibold text-gray-900">By {product.artistName}</h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className='flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6'>
                <p className='font-semibold'>Rs.{product.discountedPrice}</p>
                <p className='opacity-50 line-through'>Rs.{product.price}</p>
                <p className='text-green-600 font-semibold'>{product.discountPercentage}% off</p>
              </div>

              <form className="mt-10">
                <Button onClick={handleAddToCart} variant='contained' sx={{ px: "2rem", py: "1rem", bgcolor: "#9155fd" }}>
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
      </div>
    </div>
  )
}
