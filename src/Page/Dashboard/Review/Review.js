import React, { useEffect, useState } from "react";
import "./Review.css";
import { useForm } from "react-hook-form";
import useAuth from "./../../../Hooks/useAuth";

const Review = () => {
  const { user } = useAuth();
  const [review, setReview] = useState({});
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    setReview(data);
    reset();
  };
  console.log(review);
  useEffect(() => {
    const url = "https://evening-escarpment-00745.herokuapp.com/reviews";
    if (review?.review) {
      review.userName = user.displayName;
      fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      }).then((response) => {
        console.log(response);
        alert("Review Placed Successfully");
      });
    }
  }, [review, user]);
  return (
    <div className="review">
      <div style={{ padding: "2rem 3rem" }}>
        <h2>{user.displayName}</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          {...register("review")}
          placeholder="type your thoughts here"
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Review;
