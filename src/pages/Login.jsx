import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { isAuth, login } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      navigate("/logout");
    }
  }, [isAuth]);
  return (
    <>
      <h1 className="title">Login</h1>
      <p>
        <button className="button" onClick={login}>
          Login
        </button>
      </p>
    </>
  );
};

export default Login;
