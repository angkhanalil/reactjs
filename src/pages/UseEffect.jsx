import { useEffect, useState } from "react";
export function UseEffect() {
  const [counter, setCounter] = useState(1);
  const [tenCounter, setTenCounter] = useState(0);

  useEffect(() => {
    console.log("[] enter");
    return () => {
      console.log("[] exit");
    };
  }, []);

  useEffect(() => {
    console.log(" enter");
    return () => {
      console.log("  exit  ");
    };
  });

  useEffect(() => {
    console.log("[counter] enter");
    if (counter % 10 === 0) {
      setTenCounter(counter);
    }
    // return () => {
    //   console.log("[] exit counter");
    // };
  }, [counter]);
  return (
    <>
      <h1 className="title">UseEffect</h1>
      <h1 className="title">Counter :{counter}</h1>
      <h1 className="title">UseEffect</h1>
    </>
  );
}
