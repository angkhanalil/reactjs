import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const withAuthContext = (Component) => {
  return function (props) {
    const { context } = useContext(AuthContext);
    return <Component {...props} {...context} />;
  };
};

export default withAuthContext;
