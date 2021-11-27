import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
} from "@mui/material";
import React from "react";
import { CardMedia } from "@mui/material";
import { Typography } from "@mui/material";

const OrderCard = (props) => {
  const { order, setOrders } = props;
  const handleShipping = (order) => {
    const proceed = window.confirm("Are you sure the order is in shipping?");
    if (proceed) {
      console.log(order.status, "before");
      order.status = "in shipping";
      console.log(order.status, "after");
      const url = `https://evening-escarpment-00745.herokuapp.com/orders/${order._id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          alert("Order status has been changed to shipping");
        });
    }
  };

  if (!order) {
    return <CircularProgress />;
  }

  if (order) {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          title={order.model}
          subheader={`Product ID ${order.productId}`}
        />
        {order.img ? (
          <CardMedia
            component="img"
            height="194"
            image={order.img}
            alt="Paella dish"
          />
        ) : (
          <CircularProgress />
        )}
        <CardContent sx={{ textAlign: "start" }}>
          <Typography
            variant="h4"
            color="text.secondary"
            sx={{ textAlign: "start", py: 1, px: 3 }}
          >
            Name: {order.name}
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ textAlign: "start", py: 1, px: 3 }}
          >
            email: {order.email}
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ textAlign: "start", py: 1, px: 3 }}
          >
            Price: $ {order.price}
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ textAlign: "start", pb: 1, px: 3 }}
          >
            Delivery time: {order.delivery}
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ textAlign: "start", pb: 1, px: 3 }}
          >
            current status: {order.status}
          </Typography>

          <Button
            onClick={() => {
              handleShipping(order);
            }}
            variant="contained"
            sx={{
              backgroundColor: "black",
              fontSize: 12,
              mx: 3,
              px: 3,
              py: 1,
            }}
          >
            shipping
          </Button>
          <Button
            onClick={() => {
              props.handleDelete(order, setOrders, order._id);
            }}
            variant="contained"
            sx={{
              backgroundColor: "black",
              fontSize: 12,
              mx: 3,
              px: 3,
              py: 1,
            }}
          >
            delete
          </Button>
        </CardContent>
      </Card>
    );
  }
};

export default OrderCard;
