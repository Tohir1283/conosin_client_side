import { CircularProgress, Grid } from "@mui/material";
import React from "react";
import useWatches from "../../../Hooks/useWatches";
import WatchCard from "../../LuxuryWatches/WatchCard/WatchCard";

const TopSeller = () => {
  const [watches] = useWatches();

  if (watches.length === 0) {
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
  if (watches.length > 0) {
    return (
      <div style={{ overflow: "hidden" }}>
        <div className="watchCollection" style={{ padding: "5%" }}>
          {watches && (
            <Grid container spacing={3} sx={{ mx: "6%" }}>
              {watches.slice(0, 6).map((watch) => (
                <Grid item xs={12} md={4} key={watch._id}>
                  <WatchCard watch={watch} />
                </Grid>
              ))}
            </Grid>
          )}
        </div>
      </div>
    );
  }
};

export default TopSeller;
