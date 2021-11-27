import { useState } from "react";
import { useEffect } from "react";

const useOrder = () => {
  const [order, setOrder] = useState({});
  useEffect(() => {
    const url = "https://evening-escarpment-00745.herokuapp.com/orders";
    fetch(url)
      .then((res) => res.json())
      .then((results) => results.map((result) => setOrder(result)));
  }, []);
  return [order, setOrder];
};

export default useOrder;
