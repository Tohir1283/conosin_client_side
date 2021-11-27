import { CircularProgress, Grid } from "@mui/material";
import React from "react";
import useOrders from "../../../Hooks/useOrders";
import OrderCard from "../OrderCard/OrderCard";

const ManageAllOrders = () => {
  const [orders, setOrders] = useOrders();
  console.log(orders);

  const handleDelete = (order, setOrders, id) => {
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
            const remainingBookings = orders.filter(
              (remainingOrder) => remainingOrder._id !== id
            );
            setOrders(remainingBookings);
          }
        });
    }
  };

  if (orders.length === 0) {
    return (
      <div>
        <br />
        <br />
        <br />
        <CircularProgress />
        <CircularProgress />
        <CircularProgress />
      </div>
    );
  }
  if (orders.length > 0) {
    return (
      <div style={{ overflow: "hidden" }}>
        <div className="watchCollection" style={{ padding: "5%" }}>
          {orders && (
            <Grid container spacing={3} sx={{ mx: "6%" }}>
              {orders.map((order) => (
                <Grid item xs={12} md={4} key={order._id}>
                  <OrderCard
                    order={order}
                    handleDelete={handleDelete}
                    setOrders={setOrders}
                  />
                </Grid>
              ))}
            </Grid>
          )}
        </div>
      </div>
    );
  }
};

export default ManageAllOrders;
