import React, { useEffect, useState } from "react";

const RenderProps = ({ children }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const ref = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    });
    return () => {
      clearInterval(ref);
    };
  }, []);
  return (
    <>
      {/* {children} */}
      {children(time)}
    </>
  );
};

const Clock = () => {
  return (
    <>
      <h1 className="title">Clock</h1>
      <RenderProps>
        {/* <h1 className="title">Children</h1> */}
        {/* // exec function component */}
        {(context) => {
          return <h1 className="title">{context}</h1>;
        }}
      </RenderProps>
    </>
  );
};

export default Clock;
