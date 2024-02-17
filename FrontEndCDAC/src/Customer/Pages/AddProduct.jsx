import React, { useState } from 'react';
import axios from 'axios';

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    artistName: '',
    description: '',
    price: 0,
    discountedPrice: 0,
    discountPercentage: 0,
    imageUrl: '',
    category: { id: 1} // Assuming you have a category object with an 'id' property
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5454/products/add', formData);
      if (response.status === 200) {
        console.log('Data added successfully');
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <>
    <div className='m-10 text-4xl'><h1>Add Product</h1></div>
    <form onSubmit={handleSubmit} className="m-10">
      <div className="grid grid-cols-2 gap-4">
        <input type="text" id="title" value={formData.title} onChange={handleChange} placeholder="Title" className="border border-gray-300 p-2 rounded-md" />
        <input type="text" id="artistName" value={formData.artistName} onChange={handleChange} placeholder="Artist Name" className="border border-gray-300 p-2 rounded-md" />
        <input type="number" id="price" value={formData.price} onChange={handleChange} placeholder="Price" className="border border-gray-300 p-2 rounded-md" />
        <input type="number" id="discountedPrice" value={formData.discountedPrice} onChange={handleChange} placeholder="Discounted Price" className="border border-gray-300 p-2 rounded-md" />
        <input type="number" id="discountPercentage" value={formData.discountPercentage} onChange={handleChange} placeholder="Discount Percentage" className="border border-gray-300 p-2 rounded-md" />
        <input type="text" id="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="Image URL" className="border border-gray-300 p-2 rounded-md" />
        <input type="text" id="description" value={formData.description} onChange={handleChange} placeholder="Description" className="border border-gray-300 p-2 rounded-md" />
        <input type="text" id="categoryId" value={formData.category.id} onChange={handleChange} placeholder="Category ID" className="border border-gray-300 p-2 rounded-md" />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md mt-4 hover:bg-blue-600 ">Submit</button>
    </form>
    </>
  );
};

export default AddProductForm;
