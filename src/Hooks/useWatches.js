import { useEffect, useState } from "react";

const useWatches = () => {
  const [watches, setWatches] = useState([]);
  useEffect(() => {
    const url =
      "https://evening-escarpment-00745.herokuapp.com/watchCollection";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setWatches(data));
  }, []);

  return [watches, setWatches];
};

export default useWatches;
