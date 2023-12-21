import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Login/> */}
    <SignUp/>
  </React.StrictMode>
);

