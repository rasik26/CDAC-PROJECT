import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import CustomerRouters from './Routers/CustomerRouters';
import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store'
import Login from './Customer/Pages/Login';
import SignUp from './Customer/Pages/SignUp';

function App() {
  return (
    <div>
        <Routes>
          <Route path='/*' element={<CustomerRouters/>}></Route>
          <Route path="/login" element={<Login/>}></Route> 
          <Route path="/signUp" element={<SignUp/>}></Route> 
        </Routes>
    </div>
  );
}

export default App;
