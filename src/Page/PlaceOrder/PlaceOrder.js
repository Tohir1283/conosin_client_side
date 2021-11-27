/* eslint-disable react-hooks/rules-of-hooks */
import { Alert, CircularProgress, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../../Components/Shared/Nav/Nav";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter, AiOutlineGooglePlus } from "react-icons/ai";
import useAuth from "../../Hooks/useAuth";
import "./PlaceOrder.css";
import { useForm } from "react-hook-form";
import useStatus from "../../Hooks/useStatus";

const PlaceOrder = () => {
  const { user } = useAuth();
  const [status] = useStatus();
  const { watchId } = useParams();
  //   console.log(watchId);
  const [order, setOrder] = useState({});
  const [orderedWatch, setOrderedWatch] = useState({});

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const url = `https://evening-escarpment-00745.herokuapp.com/watchCollection/${watchId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setOrderedWatch(data));
  }, [watchId]);

  const {
    _id,
    name,
    price,
    delivery,
    size,
    paypal,
    freeDelivery,
    img,
    description,
  } = orderedWatch;
  const onSubmit = (data) => {
    const newOrder = { ...data };
    newOrder["model"] = name;
    newOrder["price"] = price;
    newOrder["delivery"] = delivery;
    newOrder["img"] = img;
    newOrder["status"] = status;

    setOrder(newOrder);
    reset();
  };
  //   console.log(order);

  useEffect(() => {
    if (order.model) {
      const url = "https://evening-escarpment-00745.herokuapp.com/orders";
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      }).then((response) => {
        console.log(response);
        alert("Ordered Placed Successfully");
      });
    }
  }, [order, status]);

  if (!orderedWatch._id) {
    return (
      <div>
        <Nav />
        <br />
        <br />
        <br />
        <br />
        <br />
        <CircularProgress />
      </div>
    );
  }
  if (orderedWatch._id) {
    return (
      <div>
        <Nav />

        <div className="placeOrder">
          <Grid container spacing={2} sx={{ my: 4 }}>
            <Grid item xs={12} md={6}>
              {orderedWatch.img ? (
                <img src={img} alt="" />
              ) : (
                <CircularProgress />
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: "start", py: 15, px: 8 }}>
                <Typography variant="h2" sx={{ fontWeight: "500" }}>
                  {name}
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: "300" }}>
                  share <TiSocialFacebook /> <AiOutlineTwitter />{" "}
                  <AiOutlineGooglePlus />
                </Typography>
                <br />
                <hr />
                <br />

                <Alert severity="success" sx={{ fontStyle: "1rem" }}>
                  <Typography variant="h4">
                    Price: {price} and save {paypal} with paypal purchase
                  </Typography>
                </Alert>
                <br />
                <br />
                <Typography variant="h5">
                  Tax Excluded Delivery {delivery}
                </Typography>
                <br />
                <Typography variant="h6">{description}</Typography>
                <br />
                <hr />
                <br />
                <Typography variant="h5">size : {size}</Typography>
                <br />
                <Alert severity="info">
                  <Typography variant="h5">{freeDelivery}</Typography>
                </Alert>
                <br />
                <hr />
                <br />

                <Alert severity="error">
                  <Typography variant="h5">
                    Replacement: {orderedWatch.return}
                  </Typography>
                </Alert>
                <br />
                <br />
                <br />
                <br />
                <Box>
                  <div className="purchase">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <Typography variant="h4">
                        Enter valid information to place order
                      </Typography>
                      <label>Name:</label>
                      <input
                        {...register("name")}
                        defaultValue={user.displayName}
                        type="name"
                        name="name"
                        placeholder="Enter your name"
                      />
                      <label>Email:</label>

                      <input
                        {...register("email")}
                        defaultValue={user.email}
                        type="email"
                        name="email"
                        placeholder="Enter your email "
                      />
                      <label>Phone Number:</label>

                      <input
                        {...register("phone")}
                        defaultValue={user.phoneNumber}
                        type="number"
                        name="phone"
                        placeholder="Enter your phone number"
                      />
                      <label>Package ID:</label>
                      {_id && (
                        <input
                          {...register("productId")}
                          defaultValue={_id}
                          name="packageId"
                          type="text"
                          id="packageId"
                        />
                      )}
                      <Alert
                        severity="error"
                        style={{ width: "390px", fontSize: "1.5rem" }}
                      >
                        Do not edit!!!
                      </Alert>
                      <label>User Id:</label>

                      <input
                        {...register("userId")}
                        defaultValue={user.uid}
                        name="userId"
                        type="text"
                        id="userId"
                      />
                      <Alert
                        severity="error"
                        style={{ width: "390px", fontSize: "1.5rem" }}
                      >
                        Do not edit!!!
                      </Alert>

                      <input
                        type="submit"
                        value="book now"
                        style={{
                          backgroundColor: "black",
                          fontWeight: "bold",
                          color: "white",
                        }}
                      />
                    </form>
                  </div>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
};

export default PlaceOrder;
