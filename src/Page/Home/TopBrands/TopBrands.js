import React from "react";
import { Box } from "@mui/material";

const TopBrands = () => {
  return (
    <div>
      <Box
        sx={{
          maxWidth: "1240px",
          display: "flex",
          justifyContent: "space-evenly",
          my: 10,
          mx: "auto",
        }}
      >
        <div className="inner">
          <img
            src="https://apollotran.b-cdn.net/prestashop/leo_conosin_demo/themes/leo_conosin/assets/img/modules/appagebuilder/images/home1-img1.jpg"
            alt=""
          />
        </div>
        <div className="inner">
          <img
            src="https://apollotran.b-cdn.net/prestashop/leo_conosin_demo/themes/leo_conosin/assets/img/modules/appagebuilder/images/home1-img2.jpg"
            alt=""
          />
        </div>
      </Box>
    </div>
  );
};

export default TopBrands;
