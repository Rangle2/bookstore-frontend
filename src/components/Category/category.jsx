import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import CategoryCard from './categorycard';

const Category = ({ categories, onCategoryClick }) => {
    return (
        <Box sx={{ width: '100%', maxWidth: 260, bgcolor: 'background.paper' }}>
            {categories.map((category) => (
                <ListItem key={category.categoryId} component="div" disablePadding>
                    <ListItemButton onClick={() => onCategoryClick(category.categoryId)}>
                        <ListItemText primary={category.categoryName} />
                    </ListItemButton>
                </ListItem>
            ))}
        </Box>
    );
};

const ProductList = ({ products, selectedCategory }) => {
    console.log(selectedCategory);

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', overflowY: 'auto', maxHeight: '500px', marginTop: '10px' }}>
            {products.map((product) => (
                <div key={product.productId} style={{ width: '200px', margin: '8px' }}>
                    <Link to={`/product/${product.productId}`} style={{ textDecoration: 'none' }}>
                        <CategoryCard
                            title={product.name}
                            description={product.description}
                            price={`${product.price} ₺`}
                            category={selectedCategory !== undefined ? `Category ${selectedCategory}` : ''}
                            imageUrl={product.imgLink}
                        />
                    </Link>
                </div>
            ))}
        </div>
    );
};;


const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(undefined);

    

    const fetchCategories = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/category/get');
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchCategoryProducts = async (categoryId) => {
        try {
            const response = await fetch(`http://localhost:8080/api/category/${categoryId}/products`);
            const data = await response.json();
            setCategoryProducts(data);
        } catch (error) {
            console.error(`Error fetching products for category ${categoryId}:`, error);
        }
    };


    const fetchAllProducts = async (categoryId) => {
        try {
            const response = await fetch(`http://localhost:8080/api/products/get`);
            const data = await response.json();
            setCategoryProducts(data);
        } catch (error) {
            console.error(`Error fetching products for category ${categoryId}:`, error);
        }
    };



    useEffect(() => {
        fetchCategories();
        fetchAllProducts();
    }, []);

    const handleCategoryClick = (categoryId) => {
        fetchCategoryProducts(categoryId);
        setSelectedCategory(categoryId);
    };

    return (
        <div style={{ display: 'flex' }}>
            <Category categories={categories} onCategoryClick={handleCategoryClick} />
            <ProductList products={categoryProducts} selectedCategory={selectedCategory} />
        </div>
    );
};

export default CategoryList;
