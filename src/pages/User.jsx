import { useEffect, useState } from "react";
import axios from "../axios.js";
import { useParams } from "react-router-dom";

export function User() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    axios.get(`users/${id}`).then((res) => {
      console.log(res.data);
      setUser(res.data);
    });
  }, []);
  return (
    <>
      <h1>User : {id}</h1>
      <pre>{JSON.stringify(user)}</pre>
    </>
  );
}
