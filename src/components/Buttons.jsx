import React, { useState } from "react";

const Buttons = () => {
  const [status, setStatus] = useState([false, false, true, false]);

  const handleClick = (idx) => {
    const newStatus = status.map((el, i) => {
      if (idx === i) {
        return !el;
      }
      {
        return el;
      }
    });
    setStatus(newStatus);
  };

  const selected = status.reduce((acc, el) => {
    if (el) {
      return acc + 1;
    }
    {
      return acc;
    }
  }, 0);

  const selectedText = status
    .map((el, idx) => {
      if (el) {
        return idx + 1;
      }
      {
        return -1;
      }
    })
    .filter((each) => {
      return each !== -1;
    })
    .join(",");

  return (
    <>
      <h1 className="title">selected Count : {selected}</h1>
      <h1 className="title">{selectedText}</h1>
      <div className="columns">
        {status.map((el, idx) => {
          const className = el ? "button is-primary" : "button";
          return (
            <div className="column" key={idx}>
              <button className={className} onClick={() => handleClick(idx)}>
                Button {idx + 1}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Buttons;
