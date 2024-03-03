import { Box, Button, Grid, TextField } from '@mui/material';
import React, { useState,useEffect } from 'react';
import AddressCard from '../AddressCard/AddressCard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DeliveryAddressForm = () => {
  const navigate = useNavigate();
  const [listAdd,setListAdd] = useState({});
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    mobile: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = sessionStorage.getItem('id');
        const response = await axios.get(`http://localhost:5454/address/find/${id}`);
        if (response.status === 200) {
          setListAdd(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.error('Error delivering address:', error);
      }
    };
  
    fetchData(); 
  
  }, []); 
  

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
      const id = sessionStorage.getItem('id');
      const response = await axios.post(`http://localhost:5454/address/deliverAddress/${id}`, formData);
      if (response.status === 200) {
        alert('Address delivered successfully');
        navigate("/cart/checkout?step=3");
      }
    } catch (error) {
      console.error('Error delivering address:', error);
    }
  };

  return (
    <div>
      <Grid container spacing={4}>
        <Grid xs={12} lg={5} className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
          <div className='p-5 py-7 border-b cursor-pointer'>
            <AddressCard formData={listAdd}/>
            <Button sx={{ mt: 2,bgcolor: "RGB(145 85 253)" }} size='large' variant="contained" onClick={()=>navigate("/cart/checkout?step=3")}>
              Deliver Here
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete='given-name'
                    value={formData.firstName}
                    onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete='given-name'
                    value={formData.lastName}
                    onChange={handleChange} />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="streetAddress"
                    name="streetAddress"
                    label="Address"
                    fullWidth
                    autoComplete='given-name'
                    multiline
                    rows={4}
                    value={formData.streetAddress}
                    onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete='given-name'
                    value={formData.city}
                    onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State"
                    fullWidth
                    autoComplete='given-name'
                    value={formData.state}
                    onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zipCode"
                    name="zipCode"
                    label="Pin Code"
                    fullWidth
                    autoComplete='shipping postal-code'
                    value={formData.zipCode}
                    onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="mobile"
                    name="mobile"
                    label="Phone Number"
                    fullWidth
                    autoComplete='given-name'
                    value={formData.mobile}
                    onChange={handleChange} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button sx={{ py: 1.5, mt: 2, bgcolor: "RGB(145 85 253)" }} size='large' variant="contained" type="submit">
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
