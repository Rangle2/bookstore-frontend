import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/home'; // Import your Home component
import Register from './components/Register/register'; // Import your Register component
import LoginForm from './components/Login/login';
import Homevalid from './components/Home/homevalid';
import Profile from './components/User/profile';
import Product from './components/Product/product';
import CreateSeller from './components/Seller/createseller';
import Homeseller from './components/Home/homeseller';
import Cart from './components/Cart/cart';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<Homevalid />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product/:productId" element={<Product/>} />
        <Route path='/createSeller' element={<CreateSeller/>} />
        <Route path='/seller'  element={<Homeseller/>} />
        <Route path='/cart/:userId' element={<Cart />} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App