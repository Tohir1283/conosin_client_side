import React, { useState, useEffect } from "react";
import useOrders from "../../../Hooks/useOrders";
import useAuth from "./../../../Hooks/useAuth";
import { CircularProgress, Container } from "@mui/material";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import MyOrderCard from "./MyorderCard/MyOrderCard";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders] = useOrders();
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    const remainingOrders = orders.filter((order) => order.userId === user.uid);
    setMyOrders(remainingOrders);
  }, [orders, user]);
  console.log("Orders", myOrders);

  const handleDeleteMyOrder = (order, setMyOrders, id) => {
    const proceed = window.confirm(
      `Are you sure you want to delete this order? ${order.name}`
    );
    if (proceed) {
      const url = `https://evening-escarpment-00745.herokuapp.com/orders/${order._id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert(`Your order of ${order.name} has been deleted`);
            const remainingBookings = myOrders.filter(
              (remainingOrder) => remainingOrder._id !== id
            );
            setMyOrders(remainingBookings);
          }
        });
    }
  };
  if (myOrders.length === 0) {
    return (
      <div>
        <h1>My orders</h1>
        <br />
        <br />
        <CircularProgress />
      </div>
    );
  }

  if (myOrders.length > 0) {
    return (
      <div>
        <h1>My orders</h1>
        <br />
        <br />
        <br />
        <Container>
          <Box>
            <Grid container>
              {myOrders.map((order) => (
                <Grid item xs={12} md={6} lg={4} key={order._id}>
                  <MyOrderCard
                    handleDeleteMyOrder={handleDeleteMyOrder}
                    order={order}
                    setMyOrders={setMyOrders}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </div>
    );
  }
};

export default MyOrders;
