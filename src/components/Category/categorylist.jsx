import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import CategoryCard from './categorycard';

const CategoryList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Gerçek bir API endpoint'ine GET isteği atın
    fetch('http://localhost:8080/api/products/get')
  .then(response => response.json())
  .then(data => setProducts(data))
  .catch(error => console.error('Error fetching products:', error.message));
  }, []); // useEffect, component ilk render olduğunda bir kere çalışır

  return (
    <div style={{ maxHeight: '500px', overflowY: 'auto', scrollbarColor: 'black white' }}>
      <Grid container spacing={2} justifyContent="center">
        {products.map((product) => (
          <Grid item key={product.productId} xs={12} sm={6} md={4} lg={3}>
            <Link to={`/product/${product.productId}`} style={{ textDecoration: 'none' }}>
              <CategoryCard
                title={product.name}
                description={product.description}
                price={`${product.price} ₺`}
                category={product.categoryName}
                imageUrl={product.imgLink}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CategoryList;
