import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Button, Card, CardContent, Grid } from '@mui/material';
import Navbar from '../navbar/navbarseller';

const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split('/').pop();

  const [product, setProduct] = useState({});

  useEffect(() => {
    // productId'ye göre ürün detaylarını çek
    fetch(`http://localhost:8080/api/products/get/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error(`Error fetching product details: ${error}`));
  }, [productId]);

  const resizedImage = `http://localhost:3000/${product.imgLink}`;

  return (
    <Grid container spacing={2}>
        <Navbar />
      <Grid item xs={10} md={9} ml={35}>
        <Card>
          <div style={{ textAlign: 'center' }}>
            <img
              alt={product.name}
              src={resizedImage}
              style={{ width: '100%', maxWidth: '400px', height: 'auto' }}
            />
          </div>
          <CardContent style={{textAlign: 'center'}}>
            <Typography variant="h4" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="h6" color="textSecondary" gutterBottom>
              Price : {product.price} TL
            </Typography>
            <Typography variant="h6" paragraph>
              Description : {product.description}
            </Typography>
            <Button sx={{ 
                    backgroundColor: 'black',
                    color: 'white',
                    fontWeight: 'bold',
                    alignItems:'center',
                    '&:hover': { background: 'black', color: 'white' },
                    width:'150px',
                    padding: '10px'

            }} variant="contained" color="primary">
              Add Cart
            </Button>
          </CardContent>
          
        </Card>
      </Grid>
    </Grid>
  );
};

export default Product;
