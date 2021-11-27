import React from "react";
import Nav from "../../../Components/Shared/Nav/Nav";
import Carousel from "../Carousel/Carousel";
import Reviews from "../Reviews/Reviews";
import TopBrands from "../TopBrands/TopBrands";
import TopSeller from "../TopSeller/TopSeller";
import Footer from "./../../../Components/Shared/Nav/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Nav />
      <Carousel />
      <TopBrands />
      <TopSeller />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
