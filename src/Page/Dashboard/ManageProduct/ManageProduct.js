import { CircularProgress, Container, Grid } from "@mui/material";
import React from "react";
import useWatches from "../../../Hooks/useWatches";
import ProductCard from "./ProductCard/ProductCard";

const ManageProduct = () => {
  const [watches, setWatches] = useWatches();

  const handleProductDelete = (watch, setWatches, id) => {
    console.log(watch);
    const proceed = window.confirm(
      `Are you sure you want to delete this order? ${watch.name}`
    );
    if (proceed) {
      const url = `https://evening-escarpment-00745.herokuapp.com/watchCollection/${watch._id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert(`Your product ${watch.name} has been deleted`);
            const remainingProducts = watches.filter(
              (remainingOrder) => remainingOrder._id !== id
            );
            setWatches(remainingProducts);
          }
        });
    }
  };

  if (watches.length === 0) {
    return (
      <div>
        <br />
        <br />
        <br />
        <CircularProgress />
        <CircularProgress />
        <CircularProgress />
        <CircularProgress />
        <CircularProgress />
      </div>
    );
  }

  if (watches.length > 0) {
    return (
      <div>
        <div className="watchCollection" style={{ padding: "5%" }}>
          {watches && (
            <Container>
              <Grid container spacing={2}>
                {watches.map((watch) => (
                  <Grid item key={watch._id}>
                    <ProductCard
                      setWatches={setWatches}
                      watch={watch}
                      handleProductDelete={handleProductDelete}
                    />
                  </Grid>
                ))}
              </Grid>
            </Container>
          )}
        </div>
      </div>
    );
  }
};

export default ManageProduct;
