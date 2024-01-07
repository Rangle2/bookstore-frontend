import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
} from '@material-ui/core';

const CreateSeller = () => {
    const [sellerInfo, setSellerInfo] = useState({
      username: localStorage.getItem("username"),
      firstName: '',
      lastName: '',
      companyName: '',
      phoneNumber: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setSellerInfo((prevInfo) => ({
        ...prevInfo,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
  
      // Fetch response
      
      fetch('http://localhost:8080/api/seller/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sellerInfo),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Response:', data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    };

  return (
    <Grid container justify="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={10} sm={8} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: 20 }}>
          <Typography variant="h5" align="center" gutterBottom>
            Seller Registration
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              name="firstName"
              value={sellerInfo.firstName}
              onChange={handleChange}
              required
              margin="normal"
            />

            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              name="lastName"
              value={sellerInfo.lastName}
              onChange={handleChange}
              required
              margin="normal"
            />

            <TextField
              label="Company Name"
              variant="outlined"
              fullWidth
              name="companyName"
              value={sellerInfo.companyName}
              onChange={handleChange}
              required
              margin="normal"
            />

            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              type="tel"
              name="phoneNumber"
              value={sellerInfo.phoneNumber}
              onChange={handleChange}
              required
              margin="normal"
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: 20 }}
            >
              Register as Seller
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CreateSeller;