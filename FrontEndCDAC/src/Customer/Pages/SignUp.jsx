import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
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

      if (formData.password !== formData.confirmPassword) {
        throw new Error('Passwords do not match');
      }
  

      const response = await axios.post('http://localhost:5454/auth/signup', {
        firstname: formData.firstName, 
        lastname: formData.lastName, 
        email: formData.email,
        password: formData.password,
      });
      if (response.status === 201) {
        alert('Signup successful! Please login.'); 
        navigate('/login'); 
      } else {
        throw new Error('Signup failed'); 
      }
    } catch (error) {
      console.error('Error signing up:', error);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div className="flex h-screen w-screen">
      <div className="flex items-center justify-center h-screen w-5/12">
        <h1 className="text-6xl text-gray-800">ART GALLERY</h1>
      </div>

      <div className="flex flex-col items-center justify-center h-screen w-7/12">
        <div className="w-4/5 bg-white bg-opacity-95 p-5 rounded-lg ml-5">
          <form onSubmit={handleSubmit}>
            <div className="p-5 rounded">
              <div className="flex gap-4 mb-4">
                <input type="text" placeholder="First Name" id="firstName" className="p-4 text-lg w-1/2 box-border border border-gray-300 rounded" onChange={handleChange} value={formData.firstName} required/>
                <input type="text" placeholder="Last Name" id="lastName" className="p-4 text-lg w-1/2 box-border border border-gray-300 rounded" onChange={handleChange} value={formData.lastName} required />
              </div>
              <input type="email" placeholder="Email" id="email" className="p-4 text-lg w-full box-border mb-4 border border-gray-300 rounded" onChange={handleChange} value={formData.email} required/>
              <input type="password" placeholder="Password" id="password" className="p-4 text-lg w-full box-border mb-4 border border-gray-300 rounded" onChange={handleChange} value={formData.password} required/>
              <input type="password" placeholder="Confirm Password" id="confirmPassword" className="p-4 text-lg w-full box-border mb-4 border border-gray-300 rounded" onChange={handleChange} value={formData.confirmPassword} required/>
              <button type="submit" className="p-4 text-lg w-full bg-green-500 text-white cursor-pointer rounded hover:bg-green-600">SUBMIT</button>
            </div>
          </form>
        </div>
        
        <p onClick={() => navigate('/login')} className="text-lg mt-6 text-gray-700">Already have an account? <a href="#" className="text-green-500 no-underline">Login</a></p>
      </div>
    </div>
  );
}
