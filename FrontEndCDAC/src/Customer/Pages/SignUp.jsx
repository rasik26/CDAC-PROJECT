import React from 'react';
import {useNavigate } from 'react-router-dom'

export default function SignUp() {
  const navigate = useNavigate();
  return (
    
    <div className="flex h-screen w-screen">
      <div className="flex items-center justify-center h-screen w-5/12">
        <h1 className="text-6xl text-gray-800">ART GALLERY</h1>
      </div>

      <div className="flex flex-col items-center justify-center h-screen w-7/12">
        <div className="w-4/5 bg-white bg-opacity-95 p-5 rounded-lg ml-5">
          <div className="p-5 rounded">
            <div className="flex gap-4 mb-4">
              <input type="text" placeholder="First Name" id="firstName" className="p-4 text-lg w-1/2 box-border border border-gray-300 rounded" />
              <input type="text" placeholder="Last Name" id="lastName" className="p-4 text-lg w-1/2 box-border border border-gray-300 rounded" />
            </div>
            <input type="email" placeholder="Username" id="email" className="p-4 text-lg w-full box-border mb-4 border border-gray-300 rounded" />
            <input type="password" placeholder="Password" id="pass" className="p-4 text-lg w-full box-border mb-4 border border-gray-300 rounded" />
            <input type="password" placeholder="Confirm Password" id="confirmPass" className="p-4 text-lg w-full box-border mb-4 border border-gray-300 rounded" />
            <button id="subbtn" className="p-4 text-lg w-full bg-green-500 text-white cursor-pointer rounded hover:bg-green-600">SUBMIT</button>
          </div>
        </div>
        
        <p onClick={()=>navigate('/login')} className="text-lg mt-6 text-gray-700">Already have an account? <a href="#" className="text-green-500 no-underline">Login</a></p>
      </div>
    </div>
  );
}
