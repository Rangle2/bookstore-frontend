import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

const CategoryCard = ({ title, price, imageUrl, rating }) => {
  return (
    <Card sx={{ maxWidth: 300, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image={imageUrl}
          alt={title}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {price}
          </Typography>
          <Rating name="read-only" value={rating} readOnly />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CategoryCard;
