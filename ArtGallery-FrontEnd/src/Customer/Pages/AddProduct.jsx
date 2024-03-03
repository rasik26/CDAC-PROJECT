import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddProductForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    artistName: '',
    description: '',
    price: 0,
    discountedPrice: 0,
    discountPercentage: 0,
    imageUrl: '',
    category: { id: 0 } 
  });
  const userRole = sessionStorage.getItem('role');

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'categoryId') {
      setFormData(prevState => ({
        ...prevState,
        category: {
          ...prevState.category,
          id: value
        }
      }));
    } else {
      let newValue = value;
      if (id === 'price') {
        setFormData(prevState => ({
          ...prevState,
          [id]: newValue
        }));
      } else if (id === 'discountPercentage') {
        newValue = parseFloat(value);
        if (newValue > 99) {
          newValue = 99;
        }
        setFormData(prevState => ({
          ...prevState,
          [id]: newValue
        }));
      } else {
        setFormData(prevState => ({
          ...prevState,
          [id]: newValue
        }));
      }
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5454/products/add', formData);
      if (response.status === 200) {
        console.log('Data added successfully');
        navigate('/');
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return userRole === 'artist' ? (
    <>
      <div className='m-10 text-4xl'><h1>Add Product</h1></div>
      <form onSubmit={handleSubmit} className="m-10">
      <div className="grid grid-cols-2 gap-4">
        <input type="text" id="title" value={formData.title} onChange={handleChange} placeholder="Title" className="border border-gray-300 p-2 rounded-md" required/>
        <input type="text" id="artistName" value={formData.artistName} onChange={handleChange} placeholder="Artist Name" className="border border-gray-300 p-2 rounded-md" required/>
        <input type="number" min={1} id="price" value={formData.price} onChange={handleChange} placeholder="Price" className="border border-gray-300 p-2 rounded-md" required/>
        <input type="number" id="discountedPrice" value={formData.discountedPrice} onChange={handleChange} placeholder="Discounted Price" className="border border-gray-300 p-2 rounded-md" required/>
        <input type="number" id="discountPercentage" value={formData.discountPercentage} onChange={handleChange} placeholder="Discount Percentage" className="border border-gray-300 p-2 rounded-md" required/>
        <input type="text" id="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="Image URL" className="border border-gray-300 p-2 rounded-md" required/>
        <input type="text" id="description" value={formData.description} onChange={handleChange} placeholder="Description" className="border border-gray-300 p-2 rounded-md" required/>
        <input type="text" id="categoryId" value={formData.category.id} onChange={handleChange} placeholder="Category ID" className="border border-gray-300 p-2 rounded-md" required/>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md mt-4 hover:bg-blue-600 ">Submit</button>
      </form>
    </>
  ) : (
    <div>You are not authorized to access this page.</div>
  );
};

export default AddProductForm;
