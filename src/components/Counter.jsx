import React, { useState } from "react";

const Counter = ({ initCounter = 1 }) => {
  const [counter, setCounter] = useState(initCounter);

  const className = counter <= 0 ? "button is-danger" : "button";
  const disabled = counter === 0;
  return (
    <>
      <h1>counter : {counter}</h1>
      <p>
        <button
          className={className}
          disabled={disabled}
          onClick={() => setCounter((prev) => prev - 1)}
        >
          Update
        </button>
      </p>
    </>
  );
};

export default Counter;
