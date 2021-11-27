import { useEffect, useState } from "react";

const useWatch = () => {
  const [watch, setWatch] = useState({});
  useEffect(() => {
    const url =
      "https://evening-escarpment-00745.herokuapp.com/watchCollection";
    fetch(url)
      .then((response) => response.json())
      .then((watchCollection) =>
        watchCollection.map((watch) => setWatch(watch))
      );
  }, []);
  return [watch, setWatch];
};
export default useWatch;
