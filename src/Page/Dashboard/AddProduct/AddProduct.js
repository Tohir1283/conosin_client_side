import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddProduct.css";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    axios
      .post(
        "https://evening-escarpment-00745.herokuapp.com/watchCollection",
        data
      )
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          alert("Successfully Added the Destination");
          reset();
        }
      });
  };
  return (
    <div className="addProduct">
      <h2>This is add product</h2>
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Name of watch" />
        <input {...register("size")} placeholder="enter all available size" />
        <input
          {...register("delivery")}
          placeholder="enter the delivery period"
        />
        <input
          {...register("return")}
          placeholder="enter the money return period"
        />
        <input {...register("price")} placeholder="enter the price" />
        <input
          {...register("paypal")}
          placeholder="enter the paypal discount percentage"
        />
        <input
          {...register("freeDelivery")}
          placeholder="enter the free delivery area"
        />

        <textarea {...register("description")} placeholder="Description " />

        <input
          {...register("img")}
          placeholder="Cover of  card  image (img-url)"
        />

        <input
          type="submit"
          style={{ backgroundColor: "cyan", cursor: "pointer" }}
        />
      </form>
    </div>
  );
};

export default AddProduct;
