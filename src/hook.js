import React, { useState } from "react";

//Custom Hook
export function useInput(initValue) {
  const [value, setValue] = useState(initValue);

  function handlechange(e) {
    setValue(e.target.value);
  }

  return [value, handlechange];
}
export function useCounter(initValue) {
  const [value, setValue] = useState(initValue);

  function handleClickIncrement() {
    setValue((prev) => prev + 1);
  }

  function handleClickDecrement() {
    setValue((prev) => prev - 1);
  }

  return [value, handleClickIncrement, handleClickDecrement];
}
