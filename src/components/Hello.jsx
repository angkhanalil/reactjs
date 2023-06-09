import React from "react";

const Hello = (props) => {
  const { name = "Untitle", age = 0 } = props; //destructure default value
  return (
    <h1 className="title">
      {name} ({age})
    </h1>
  );
};

export default Hello;
