import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function ArtistProductPage({ artistId }) {
  const [products, setProducts] = useState([]);
  const { artistName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductsByArtist = async () => {
      try {
        const response = await axios.get(`http://localhost:5454/artist/${artistName}`);
        setProducts(response.data);
        console.log(setProducts(response.data))
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProductsByArtist();
  }, [artistId]);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-semibold mb-6">Art by {artistName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <div onClick={()=>navigate(`/art/${product.id}`, { state: { product: product } })} className="bg-gray-200 p-4 rounded-lg">
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p>Price: Rs. {product.price}</p>
            <img src={product.imageUrl} alt={product.title} className="mt-2 w-full h-40 object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
