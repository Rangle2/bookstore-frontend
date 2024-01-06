import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import CategoryCard from './categorycard';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const fetchCategories = () => {
    // Simulate fetching categories (replace with your actual API call)
    const mockCategories = [
      { categoryId: 1, categoryName: 'Category 1' },
      { categoryId: 2, categoryName: 'Category 2' },
      // Add more categories as needed
    ];
    setCategories(mockCategories);
  };

  const fetchCategoryProducts = (categoryId) => {
    // Simulate fetching category products (replace with your actual API call)
    const mockCategoryProducts = [
      { productId: 1, name: 'Product 1', description: 'Description 1', price: 20, imgLink: 'image1.jpg' },
      { productId: 2, name: 'Product 2', description: 'Description 2', price: 30, imgLink: 'image2.jpg' },
      // Add more products as needed
    ];
    setCategoryProducts(mockCategoryProducts);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    fetchCategoryProducts(categoryId);
    setSelectedCategory(categoryId);
  };

  return (
    <div style={{ maxHeight: '500px', overflowY: 'auto', scrollbarColor: 'black white' }}>
      <Box sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}>
        <FixedSizeList
          height={400}
          width={360}
          itemSize={46}
          itemCount={categories.length}
          overscanCount={5}
        >
          {({ index, style }) => (
            <ListItem style={style} key={categories[index].categoryId} component="div" disablePadding>
              <ListItemButton onClick={() => handleCategoryClick(categories[index].categoryId)}>
                <ListItemText primary={categories[index].categoryName} />
              </ListItemButton>
            </ListItem>
          )}
        </FixedSizeList>
      </Box>

      <Grid container spacing={2} justifyContent="center">
        {selectedCategory
          ? categoryProducts.map((product) => (
              <Grid item key={product.productId} xs={12} sm={6} md={4} lg={3}>
                <Link to={`/product/${product.productId}`} style={{ textDecoration: 'none' }}>
                  <CategoryCard
                    title={product.name}
                    description={product.description}
                    price={`${product.price} ₺`}
                    category={`Category ${selectedCategory}`}
                    imageUrl={product.imgLink}
                  />
                </Link>
              </Grid>
            ))
          : null /* Render nothing when no category is selected */}
      </Grid>
    </div>
  );
};

export default CategoryList;
