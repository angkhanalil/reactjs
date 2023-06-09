import React, { useState } from "react";

const Button = (props) => {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + props.step);
  }

  return (
    <button onClick={handleClick}>
      Couter {props.step}: {counter}
    </button>
  );
};

export default Button;
