import React from 'react';
import Navbar from '../navbar/navbarvalid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import ProductList from '../ProductList/productlist';
import TopList from '../TopList/toplist';
import CategoryList from '../Category/categorylist';
import Category from '../Category/category';
import AboutUs from '../AboutUs/aboutus';
import LoginForm from '../Login/login';
import CircularProgress from '@mui/material/CircularProgress';

const isTokenValid = (token) => {
  return token !== null && token !== undefined;
};

const AuthCheck = ({ children, onLogin }) => {
  const [loading, setLoading] = React.useState(true);
  const token = localStorage.getItem('accessToken');
  const isValid = isTokenValid(token);

  React.useEffect(() => {
    // Simulate an asynchronous token validation process
    const validateToken = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
      setLoading(false);
    };

    validateToken();
  }, []); // Run only once on component mount

  return loading ? (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularProgress />
      </div>
  ) : isValid ? (
    <>{children}</>
  ) : (
    <LoginForm onLogin={onLogin} />
  );
};

const Homevalid = () => {

  return (
    <AuthCheck>
    <div>
      <Navbar title="book store"></Navbar>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ paddingY: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} sx={{ marginBottom: { xs: 4, sm: 8 } }}>
            <div style={{ height: '100%', color: 'black', fontSize: 50, fontFamily: 'Inria Serif', fontWeight: '50', wordWrap: 'break-word', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              50% Off For Your First Shopping
              <Button sx={{ marginTop: 2, backgroundColor: 'black', color: 'white', width: '120px' }}>Shop now</Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src="/img/book-img.jpg"
              alt="book"
              style={{ width: '100%', height: 'auto' }}
            />
          </Grid>
        </Grid>



        {/* Category */}
        <Container maxWidth="lg" sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Grid container spacing={4} sx={{ marginTop: 11 }}>
            <Grid item xs={12} md={4}>
              <Category />
            </Grid>
            <Grid item xs={12} md={8}>
              <CategoryList />
            </Grid>
          </Grid>
        </Container>


        {/* Best Author List*/}

        <Grid item xs={12} sx={{ marginTop: 15 }}>
          <div>
            <h2>Best Authors  </h2>
          </div>
          <div justifyContent="center">
            <ProductList />
          </div>
        </Grid>
        {/* Top Raitings List*/}
        <Grid item xs={12} sx={{ marginTop: 15 }}>
          <div>
            <h2>Top Ratings</h2>
            <TopList />
          </div>
        </Grid>
      </Container>
       {/* About Us*/}
       <div>
      <AboutUs></AboutUs>
    </div>
    
    </div>
    </AuthCheck>

  );
};

export default Homevalid;