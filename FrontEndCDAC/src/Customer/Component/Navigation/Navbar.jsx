import React, { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

// Import your circular logo as an image
import logo from './logo.jpeg';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const navigate = useNavigate();

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <nav className="flex justify-between items-center p-5 bg-white shadow-lg">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="w-12 h-12 mr-8" />
                <div className="flex items-center mr-8">
                    <a href="#" className="mr-4 text-gray-700">Categories</a>
                    <a href="#" className="mr-4 text-gray-700">Artists</a>
                    <a href="#" className="mr-4 text-gray-700">About Us</a>
                </div>
            </div>
            <div className="flex items-center">
                {isLoggedIn ? (
                    <div>
                        <IconButton onClick={handleProfileMenuOpen} className="">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 mr-4">
                                <Typography variant="body1">P</Typography>
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
                            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                            <MenuItem onClick={()=>navigate("/account/order")}>Order</MenuItem>
                            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
                        </Menu>
                    </div>
                ) : (
                    <div>
                        <a href="#" className="mr-8 text-gray-700">Sign Up</a>
                        <a href="#" className="mr-8 text-gray-700">Login</a>
                    </div>
                )}
                <a href="#" className="mr-8 text-gray-700"><ShoppingCartIcon /></a>
                <a href="#" className="text-gray-700"><FavoriteBorderIcon /></a>
            </div>
        </nav>
    );
};

export default Navbar;
