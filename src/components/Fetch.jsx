import React, { useEffect, useState } from "react";
import axios from "../axios";

const Fetch = ({ uri, children }) => {
  const [context, setContext] = useState([]);
  useEffect(() => {
    axios.get(uri).then((res) => {
      setContext(res.data);
    });
  }, [uri]);
  return <>{children(context)}</>;
};

export default Fetch;
