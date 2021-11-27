import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CircularProgress } from "@mui/material";
import { NavLink } from "react-router-dom";

const ItemCard = ({ watch }) => {
  if (!watch) {
    return <CircularProgress />;
  }

  if (watch) {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          title={watch.name}
          subheader={`Paypal discount ${watch.paypal}`}
        />
        {watch.img ? (
          <CardMedia
            component="img"
            height="194"
            image={watch.img}
            alt="Paella dish"
          />
        ) : (
          <CircularProgress />
        )}
        <CardContent sx={{ textAlign: "start" }}>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ textAlign: "start", py: 1, px: 3 }}
          >
            Price: $ {watch.price}
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ textAlign: "start", pb: 1, px: 3 }}
          >
            {watch.description}
          </Typography>
          <NavLink to={`/luxuryWatches/${watch._id}`}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "black",
                fontSize: 12,
                mx: 3,
                px: 3,
                py: 2,
              }}
            >
              Purchase...
            </Button>
          </NavLink>
        </CardContent>
      </Card>
    );
  }
};

export default ItemCard;
