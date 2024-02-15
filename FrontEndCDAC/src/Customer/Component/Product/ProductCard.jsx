import React from 'react';
import './Productcard.css';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({productt}) {
    const navigate = useNavigate();
    return (
        <div onClick={()=>navigate(`/art/${productt.id}`, { state: { product: productt } })} className="productCard w-[15rem] m-3 transition-all cursor-pointer rounded-md shadow-lg overflow-hidden">
            <div className="h-[15rem]">
                <img className="h-full w-full object-cover image" src={productt.imageUrl} alt="Product" />
            </div>
            <div className="textpart bg-white p-3">
                <div className="mb-2">
                    <p className="font-bold text-xl">{productt.title}</p>
                    <p className="text-gray-600">By {productt.artistName}</p>
                </div>
                <div>
                    <p className="text-lg font-semibold text-gray-800">Rs.{productt.price}</p>
                </div>
            </div>
        </div>
    );
}

