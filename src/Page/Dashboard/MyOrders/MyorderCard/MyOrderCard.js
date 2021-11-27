import React from "react";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { CardContent } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardHeader } from "@mui/material";
import { Card } from "@mui/material";

const MyOrderCard = (props) => {
  const { order, setMyOrders } = props;

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
              props.handleDeleteMyOrder(order, setMyOrders, order._id);
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

export default MyOrderCard;
