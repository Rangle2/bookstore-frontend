import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [correctMessage, setCorrectMessage] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userRequest = {
      username: formData.username,
      password: formData.password,
      email: formData.email,
    };

    if (!formData.username || !formData.email || !formData.password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }
    

    try {
      const userResponse = await fetch('http://localhost:8080/api/user/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userRequest),
      });

      if (userResponse.ok) {
        try {
          const userData = await userResponse.json();
          setCorrectMessage('Successful registration!')
          navigate('/home'); // navigate user home page 
          
        } catch (error) {
          console.error('Error parsing JSON:', error.message);
          setErrorMessage('Unexpected error occurred. Please try again.'); // JSON parsıng error
        }
      } else if (userResponse.status === 409) {
        // User exist Error
        setErrorMessage('A user with the same username or email already exists.');
      } else {
        console.error('Error creating user:', userResponse.statusText);
        setErrorMessage('Unexpected error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error creating user:', error.message);
      setErrorMessage('Unexpected error occurred. Please try again.'); // Connection error or else 
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Typography sx={{color:'red', mt:'10px', textAlign:'center', width:'500px',pt:'10px'}}>
           {errorMessage}
        </Typography>
        <Typography  sx={{color:'green', mt:'10px'}}>
          {correctMessage}
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={formData.username}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: 'black', color: 'white', '&:hover': { background: 'black', color: 'white' } }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
