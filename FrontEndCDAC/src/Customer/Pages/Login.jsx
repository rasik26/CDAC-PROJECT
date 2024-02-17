import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
      const response = await axios.post('http://localhost:5454/auth/login', formData);
      if (response.status === 201) {
        const role = response.data.role;
  
        // Store user data in sessionStorage
        sessionStorage.setItem('token', response.data.jwt);
        sessionStorage.setItem('firstName', response.data.firstName); 
        sessionStorage.setItem('id', response.data.id);
        sessionStorage.setItem('role', response.data.role);
  
        // Navigate based on the role
        if (role === "user") {
          navigate('/');
        } else if (role === "artist") {
          navigate('/addproduct');
        } else if (role === "admin") {
          navigate('/admin');
        } else {
        
          alert('Unknown role. Please contact support.');
        }
      } else {
        alert('Login failed. Please check your credentials.'); 
      }
    } catch (error) {
      console.error('Error signing in:', error);
      alert('An error occurred while signing in. Please try again later.'); 
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
              <input type="email" placeholder="Email" id="email" className="p-4 text-lg w-full box-border mb-4 border border-gray-300 rounded" onChange={handleChange} value={formData.email} required/>
              <input type="password" placeholder="Password" id="password" className="p-4 text-lg w-full box-border mb-4 border border-gray-300 rounded" onChange={handleChange} value={formData.password} required/>
              <button type="submit" className="p-4 text-lg w-full bg-green-500 text-white cursor-pointer rounded hover:bg-green-600">SUBMIT</button>
            </div>
          </form>
        </div>
        
        <p onClick={() => navigate('/signUp')} className="text-lg mt-6 text-gray-700">Don't have an account? <a href="#" className="text-green-500 no-underline">Sign up</a></p>
      </div>
    </div>
  );
}

export default Login;
