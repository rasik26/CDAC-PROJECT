import './App.css';
import Footer from './Customer/Component/Footer/Footer';
import Navbar from './Customer/Component/Navigation/Navbar';
import Product from './Customer/Component/Product/Product';
import HomePage from './Customer/Pages/HomePage';
import {Routes,Route} from 'react-router-dom'; 
import CustomerRouters from './Routers/CustomerRouters';
import React from 'react';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<CustomerRouters/>}> </Route>
      </Routes>

    </div>
  );
}

export default App;
