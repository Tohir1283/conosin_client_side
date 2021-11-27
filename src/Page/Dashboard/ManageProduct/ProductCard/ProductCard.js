import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import React from "react";

const ProductCard = (props) => {
  const { watch, setWatches } = props;

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
            alt="watch"
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

          <Button
            onClick={() => {
              props.handleProductDelete(watch, setWatches, watch._id);
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

export default ProductCard;
