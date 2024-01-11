import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: 15,
    maxWidth: 800, // Maksimum genişlik belirleyebilirsiniz
  },
  cover: {
    width: 150, // Sabit genişlik belirleyebilirsiniz
  },
  content: {
    flex: "1 0 auto",
    padding: 10,
  },
}));

export default function ShoppingCartItem() {
  const [carts, setCarts] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    let cartId = localStorage.getItem("userId");
    fetch(`http://localhost:8080/api/cart/all/${cartId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Eğer data boş bir dizi değilse, setCarts'ı güncelle
        if (Array.isArray(data) && data.length > 0) {
          setCarts(data);
        }
      })
      .catch((error) =>
        console.error(`Error fetching product details: ${error}`)
      );
  }, []);

  // Eğer carts boş bir dizi ise, hiçbir şey gösterme
  if (!carts || carts.length === 0) {
    return null;
  }

  return (
    <div>
      {carts.map((cart) => (
        <Card key={cart.cartId} className={classes.root}>
          {/* Burada kart içeriğini ve görselini saran bir div (container) ekleyin */}
          <div className={classes.cover}>
            <CardMedia
              component="img"
              alt={cart.productName}
              image={`http://localhost:3000/${cart.productImg}`}
              className={classes.cover}
            />
          </div>
          <CardContent className={classes.content}>
            {/* Diğer içerikleri ekleyin */}
            <Typography variant="div" component="h2">
              {cart.productName}
            </Typography>
            <Typography variant="h6" component="div" color="secondary">
              {cart.price}₺
            </Typography>
            <Typography variant="body1" component="div">
              Quantity: {cart.quantity}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
