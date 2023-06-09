import { useEffect } from "react";

export function Timer() {
  useEffect(() => {
    const ref = setInterval(() => {
      console.log(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(ref);
    };
  }, []);
  return (
    <>
      <h1 className="title">Timer</h1>
    </>
  );
}
