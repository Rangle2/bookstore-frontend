import React from 'react';
import Grid from '@mui/material/Grid';
import ProductCard from '../ProductCard/productcard'; 

const products = [
  {
    id: 1,
    title: 'Ürün 1',
    price: '10.99$',
    imageUrl: '/img/book-img.jpg',
    Rating: '4.5',
    
  },
  {
    id: 2,
    title: 'Ürün 2',
    price: '10.99$',
    imageUrl: '/img/book-img.jpg',
    Rating: '4.5',
  },
  {
    id: 3,
    title: 'Ürün 3',
    price: '10.99$',
    imageUrl: '/img/book-img.jpg',
    Rating: '4.5',
  },
  {
    id: 4,
    title: 'Ürün 4',
    price: '10.99$',
    imageUrl: '/img/book-img.jpg',
    Rating: '4.5',
  },

  
];

const TopList = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <ProductCard
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
            rating={product.Rating}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default TopList;
