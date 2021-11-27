import { useState } from "react";

const useStatus = () => {
  const [status, setStatus] = useState("pending");
  return [status, setStatus];
};
export default useStatus;
