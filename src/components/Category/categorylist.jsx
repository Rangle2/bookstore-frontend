import React from 'react';
import Grid from '@mui/material/Grid';
import CategoryCard from './categorycard';


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
  {
    id: 4,
    title: 'Ürün 4',
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

  {
    id: 4,
    title: 'Ürün 4',
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

const CategoryList = () => {
  return (
    <div style={{ maxHeight: '500px', overflowY: 'auto',  scrollbarColor: 'black white' }}>
      <Grid container spacing={2} justifyContent="center">
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <CategoryCard
              title={product.title}
              price={product.price}
              imageUrl={product.imageUrl}
              rating={product.Rating}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CategoryList;
