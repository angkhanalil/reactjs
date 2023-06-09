import "bulma/css/bulma.min.css";
import React, { useState } from "react";
import Hello from "./components/Hello";
import World from "./World";
import Button from "./Button";
import { useInput, useCounter } from "./hook";
import Counter from "./components/counter";
import Buttons from "./components/Buttons";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import { AuthContext } from "./context/AuthContext";

// let counter = 1;
const isMale = true;
const chars = ["A", "B", "C"];

export function App() {
  //   const [counter, setCounter] = useState(0);
  const [isAuth, setIsAuth] = useState(false);
  const [counter, handleClickIncrement, handleClickDecrement] = useCounter(1);
  const [name, handlechangeName] = useInput("john");
  const [surname, handlechangeSurname] = useInput("Doe");
  const [address, handlechangeAddress] = useInput("USA");

  const login = () => {
    setIsAuth(true);
  };

  const logout = () => {
    setIsAuth(false);
  };

  function handleClick() {
    setCounter(counter + 1);
  }
  const [] = useInput("John");
  return (
    <>
      <AuthContext.Provider value={{ isAuth, login, logout }}>
        <div className="container">
          <Navbar />

          <Outlet />
        </div>
      </AuthContext.Provider>

      {/* <p>Couter {counter}</p>
      <Hello />
      <button onClick={handleClickIncrement}>+</button>
      <button onClick={handleClickDecrement}>-</button>
      <br />
      <Button step={1} /> <Button step={2} />
      <p>{isMale ? "Male" : "Female"}</p>
      {isMale ? <h1>Male</h1> : <h2>Female</h2>}
      {chars.map((el, idx) => {
        return <p key={idx}>{el}</p>;
      })}
      <input type="text" value={name} onChange={handlechangeName}></input>
      <p>{name}</p>
      <input type="text" value={surname} onChange={handlechangeSurname}></input>
      <p>{surname}</p>
      <input type="text" value={address} onChange={handlechangeAddress}></input>
      <p>{address}</p> */}
      {/* <section className="section">
        <div className="containner">
          <h1 className="title">App</h1>
          <hr />
          <Hello name="ZeePruk" age={30} />
          <Hello name="NuNew" age={22} /> <Hello />
          <hr />
          <Counter initCounter={2} /> <Counter initCounter={5} />
          <Buttons />
        </div>
      </section> */}
    </>
  );
}
