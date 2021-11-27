import { CircularProgress, Container, Grid } from "@mui/material";
import React from "react";
import Nav from "../../Components/Shared/Nav/Nav";
import WatchCard from "./WatchCard/WatchCard";
import useWatches from "../../Hooks/useWatches";

const LuxuryWatches = () => {
  //   console.log(watches);
  const [watches] = useWatches();
  //   const [watch] = useWatch();
  if (watches.length === 0) {
    return (
      <div>
        <Nav />
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
        <Nav />
        <div className="watchCollection" style={{ padding: "5%" }}>
          {watches && (
            <Container>
              <Grid container spacing={2}>
                {watches.map((watch) => (
                  <Grid item key={watch._id}>
                    <WatchCard watch={watch} />
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

export default LuxuryWatches;
