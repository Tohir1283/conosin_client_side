import React from "react";
import Slider from "react-slick";
import "./Carousel.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,

    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="inner carouselImage">
          <img
            src="https://apollotran.b-cdn.net/prestashop/leo_conosin_demo/themes/leo_conosin/assets/img/modules/leoslideshow/home1-slide2.jpg"
            alt=""
          />
        </div>
        <div className=".inner carouselImage">
          <img
            src="https://apollotran.b-cdn.net/prestashop/leo_conosin_demo/themes/leo_conosin/assets/img/modules/leoslideshow/home1-slide1.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
