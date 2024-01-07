import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import Homevalid from '../Home/homevalid';


const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [correctMessage, setCorrectMessage] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();


    const userRequest = {
      username: formData.username,
      password: formData.password,
    };

    try {
      const userResponse = await fetch('http://192.168.1.12:8080/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userRequest),
      });
      

      if (userResponse.ok) {
        try {
          const tokendata = await userResponse.text();
          console.log('User Login successfully:', tokendata);


          localStorage.setItem('username', formData.username)
          localStorage.setItem('userId', formData.userId)
          localStorage.setItem('accessToken', tokendata);
          navigate('/home');
          

        } catch (error) {
          console.error('Error parsing JSON:', error.message);
          setErrorMessage('Unexpected error occurred. Please try again.');
        }

      }else if(userResponse.status === 401){
        setErrorMessage("Username or password wrong!")
      } else {
        console.error('Error Login user:', userResponse.statusText);
        setErrorMessage('Unexpected error occurred. Please try again.');
      }

    } catch (error) {
      console.error('Error Login user:', error.message);
      setErrorMessage('Unexpected error occurred. Please try again.');
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
        <Typography component="h1" variant="h5" sx={{ color: 'black' }}>
          Login
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
            sx={{ color: 'black' }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    {showPassword ? <VisibilityOff sx={{ color: 'black' }} /> : <Visibility sx={{ color: 'black' }} />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ color: 'black' }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, color: 'white', backgroundColor: 'black', '&:hover': { background: 'black', color: 'white' }, }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
