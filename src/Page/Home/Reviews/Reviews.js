// import { Container, Box } from "@mui/material";
import "./Reviews.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Box, Container } from "@mui/material";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const url = "https://evening-escarpment-00745.herokuapp.com/reviews";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, [setReviews]);

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    pauseOnHover: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  console.log(reviews);
  return (
    <div>
      <h2>This is review section</h2>
      <Container>
        <Box>
          <Slider {...settings} style={{ padding: "1rem" }}>
            {reviews.map((review) => (
              <div className="carousel" key={review._id}>
                <div className="review-section">
                  <h3>{review.userName}</h3>
                  <p>{review.review}</p>
                </div>
              </div>
            ))}
          </Slider>
        </Box>
      </Container>
    </div>
  );
};

export default Reviews;
