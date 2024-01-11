import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Button, Card, CardContent, Grid } from '@mui/material';
import Navbar from '../navbar/navbarseller';

const Product = () => {
  const location = useLocation();
  const productId = location.pathname.split('/').pop();

  const [product, setProduct] = useState({});

  const [cartItem, setCartItem] = useState({
    productName: '',
    price: '',
    quantity: '',
    productId: '',
    productImg: '',

  })

 


  useEffect(() => {
    // productId fetch
    fetch(`http://localhost:8080/api/products/get/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error(`Error fetching product details: ${error}`));
  }, [productId]);

  const containedId = localStorage.setItem('productId', productId);
  const containedImg = localStorage.setItem('productImg', product.imgLink);
 



  const resizedImage = `http://localhost:3000/${product.imgLink}`;

  const addToCart = () => {
    // Assuming you have the user ID stored somewhere (maybe in state)
    const userId = '1';
    const quantity = '1';
  
    // Prepare the data for the cart item
    const cartItemData = {
      productName: product.name,
      price: product.price,
      quantity: quantity,
      productId: localStorage.getItem('productId'),
      productImg: localStorage.getItem('productImg'),

    };

    
  
    // Send a POST request to your backend to add the item to the cart
    fetch(`http://localhost:8080/api/cart/create/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItemData),
    })
      .then(response => {
        if (response.ok) {
          console.log('Item added to cart successfully');
          
          // Optionally, you can update the UI to reflect the addition to the cart
        } else {
          console.error('Failed to add item to cart');
          // Handle the error, maybe show a message to the user
        }
      })
      .catch(error => {
        console.error(`Error adding item to cart: ${error}`);
      });
  };

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
            <Button onClick={addToCart} sx={{ 
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
