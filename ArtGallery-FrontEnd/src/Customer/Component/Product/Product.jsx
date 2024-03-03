import { Fragment} from 'react'
import { Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import ProductCard from './ProductCard' 
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import ProductService from '../../Data/productService';









const sortOptions = [
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Product() {

  const [products, setProducts] = useState([]);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [selectedSortOption, setSelectedSortOption] = useState(sortOptions[0]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      const allProducts = await ProductService.getAllProducts();
      setProducts(allProducts);
    }
    fetchProducts();
  }, []);




  const handleFilter=(value,sectionId)=>{
    const searchParams = new URLSearchParams(location.search);

    let filterValue = searchParams.getAll(sectionId);

    if(filterValue.length > 0 && filterValue[0].split(",").includes(value)){
        filterValue=filterValue[0].split(",").filter((item)=>item!==value)

        if(filterValue.length===0)
        {
            searchParams.delete(sectionId)
        }
    }
    else{
        filterValue.push(value)
    }

    if(filterValue.length>0){
        searchParams.set(sectionId,filterValue.join(","));
    }

    const query = searchParams.toString();
    navigate({search:`?${query}`})
  }


  const handleSingleFilterChange=(e,sectionId)=>{
    const searchParams = new URLSearchParams(location.search);
    searchParams.set(sectionId,e.target.value);
    const query = searchParams.toString();
    navigate({search:`?${query}`})
  }


  const handleSortOptionChange = (option) => {
    setSelectedSortOption(option);
    let sortedProducts = [...products];
    if (option.name === 'Newest') {
      sortedProducts.sort((a, b) => b.date - a.date); // Assuming each product has a `date` property
    } else if (option.name === 'Price: Low to High') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option.name === 'Price: High to Low') {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProducts(sortedProducts);
  };

  return (
    <div className="bg-white">
      <div>

        <main className="mt-10 px-4 sm:px-6 lg:px-10">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <button
                            onClick={() => handleSortOptionChange(option)}
                            className={classNames(
                              active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm w-full text-left'
                            )}
                          >
                              {option.name}
                            </button>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">


              {/* Product grid */}
              <div className="lg:col-span-4 w-full">
                <div className='flex flex-wrap justify-center bg-white py-4'>
                    {products.map((item)=> <ProductCard key={item.id} productt={item} /> )}
                </div>
              </div>

              
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

