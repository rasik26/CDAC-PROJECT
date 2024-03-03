import React, { useState,useEffect } from 'react';
import { useNavigate, } from 'react-router-dom';
import axios from 'axios';



const EditProductForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      title: '',
      artistName: '',
      description: '',
      price: 0,
      discountedPrice: 0,
      discountPercentage: 0,
    });
  
    const userRole = sessionStorage.getItem('role');
  
    const handleChange = (e) => {
      const { id, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [id]: value
      }));
    };
  
    const fetchProductData = async (id) => {
      try {
        const response = await axios.get(`http://localhost:5454/getProduct/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };
  
    useEffect(() => {
      const productId = 10; 
      fetchProductData(productId);
    }, []);
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const id = 10; 
            const response = await axios.put(`http://localhost:5454/products/edit/${id}`, formData); // Update the URL here
            console.log(response);
            if (response.status === 200) {
                console.log('Data edited successfully');
                navigate('/');
            }
        } catch (error) {
            console.error('Error editing product:', error);
        }
    };
    
  
    return userRole === 'artist' ? (
      <>
        <div className='m-10 text-4xl'><h1>Edit Product</h1></div>
        <form onSubmit={handleSubmit} className="m-10">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" id="title" value={formData.title} onChange={handleChange} placeholder="Title" className="border border-gray-300 p-2 rounded-md" required/>
            <input type="text" id="artistName" value={formData.artistName} onChange={handleChange} placeholder="Artist Name" className="border border-gray-300 p-2 rounded-md" required/>
            <input type="number" min={1} id="price" value={formData.price} onChange={handleChange} placeholder="Price" className="border border-gray-300 p-2 rounded-md" required/>
            <input type="number" id="discountedPrice" value={formData.discountedPrice} onChange={handleChange} placeholder="Discounted Price" className="border border-gray-300 p-2 rounded-md" required/>
            <input type="number" id="discountPercentage" value={formData.discountPercentage} onChange={handleChange} placeholder="Discount Percentage" className="border border-gray-300 p-2 rounded-md" required/>
            <input type="text" id="description" value={formData.description} onChange={handleChange} placeholder="Description" className="border border-gray-300 p-2 rounded-md" required/>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md mt-4 hover:bg-blue-600 ">Submit</button>
        </form>
      </>
    ) : (
      <div>You are not authorized to access this page.</div>
    );
  };
  
  export default EditProductForm;
  
