import { useEffect, useState } from "react";

const useOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const url = "https://evening-escarpment-00745.herokuapp.com/orders";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return [orders, setOrders];
};

export default useOrders;
