import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import CssBaseline from "@material-ui/core/CssBaseline";
import { Container, Grid } from "@mui/material";
import ShoppingCartItem from "./shoppingcart";
import OrderSummaryItem from "./OrderSummaryItem";  // Assuming you have this component
import Navbar from "../navbar/navbarvalid";

const Cart = () => {
  const { userId } = useParams();

  useEffect(() => {
    // Add any logic you need when the component mounts
  }, []);

  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={7} lg={7}>
            <Grid container spacing={2}>
              {/* Assuming ShoppingCartItem is a component that represents an item in the cart */}
              
              <ShoppingCartItem />
              
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={5} lg={5}>
            {/* Assuming OrderSummaryItem is a component that displays the order summary */}
            <OrderSummaryItem />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Cart;
