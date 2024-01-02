// AboutUs.js
import React from 'react';
import { Container, Typography, Paper, styled } from '@mui/material';

const CustomPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
}));

const AboutUs = () => {
  return (
    <Container>
      <CustomPaper>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </Typography>
      </CustomPaper>
    </Container>
  );
};

export default AboutUs;
