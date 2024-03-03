import React, { useState, useEffect } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import logo from './logo.jpeg';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [sessionStorage.getItem('token')]); 

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const firstName = sessionStorage.getItem('firstName');
    const avatarName = firstName ? firstName.substring(0, 1).toUpperCase() : '';

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('cart');
        sessionStorage.removeItem('role');
        sessionStorage.removeItem('id');
        navigate('/');
    };

    return (
        <nav className="flex justify-between items-center p-5 bg-white shadow-lg">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="w-12 h-12 mr-4" onClick={()=>navigate('/')}/>
                <div className="flex items-center mr-4">
                    <p onClick={()=>navigate('/art')} className="mr-4 text-gray-700 cursor-pointer hover:text-blue-500">Explore</p>
                    <p onClick={()=>navigate('/artist')} className="mr-4 text-gray-700 cursor-pointer hover:text-blue-500">Artists</p>
                    <p onClick={()=>navigate('/aboutus')} className="mr-4 text-gray-700 cursor-pointer hover:text-blue-500">About Us</p>
                    {sessionStorage.getItem('role') === 'artist' && (
                       <>
                        <p onClick={()=>navigate('/addproduct')} className="mr-4 text-gray-700 cursor-pointer hover:text-blue-500">Add Product</p> 
                        <p onClick={()=>navigate('/editart')} className="mr-4 text-gray-700 cursor-pointer hover:text-blue-500">Edit Product</p>
                       </>
                    )}
                    
                    {sessionStorage.getItem('role') !== 'artist' && (
                        <p onClick={()=>navigate('/seller')} className="mr-4 text-gray-700 cursor-pointer hover:text-blue-500">Seller</p>
                    )}
                </div>
            </div>
            <div className="flex items-center">
                {isLoggedIn ? (
                    <div>
                        <IconButton onClick={handleProfileMenuOpen} className="mr-4">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300">
                                <Typography variant="body1" className="text-gray-700">{avatarName}</Typography>
                            </div>
                        </IconButton>
                        <Menu
                            id="profile-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            getContentAnchorEl={null}
                        >
                            <MenuItem onClick={()=>navigate("/account/order")}>Order</MenuItem>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </div>
                ) : (
                    <div>
                        <a onClick={()=>navigate('/signUp')} className="mr-4 text-gray-700 cursor-pointer hover:text-blue-500">Sign Up</a>
                        <a onClick={()=>navigate('/login')} className="mr-4 text-gray-700 cursor-pointer hover:text-blue-500">Login</a>
                    </div>
                )}
                <a onClick={()=>navigate('/cart')} className="mr-4 text-gray-700 cursor-pointer hover:text-blue-500"><ShoppingCartIcon /></a>
            </div>
        </nav>
    );
};

export default Navbar;
