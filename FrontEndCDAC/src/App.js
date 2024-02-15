import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import CustomerRouters from './Routers/CustomerRouters';
import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store'

function App() {
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path='/*' element={<CustomerRouters/>}></Route>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
