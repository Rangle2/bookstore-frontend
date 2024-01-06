import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

const CategoryCard = ({ title, price, imageUrl, rating }) => {
  return (
    <Card>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
        <Rating name="read-only" value={rating} readOnly />
      </CardContent>
    </CardActionArea>
  </Card>
  );
};

export default CategoryCard;
