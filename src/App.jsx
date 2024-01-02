import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/home'; // Import your Home component
import Register from './components/Register/register'; // Import your Register component
import LoginForm from './components/Login/login';
import Homevalid from './components/Home/homevalid';
import Profile from './components/User/profile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<Homevalid />} />
        <Route path="/profile" element={<Profile />} />

        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App