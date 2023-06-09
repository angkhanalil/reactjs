import React, { useEffect } from "react";
import { ref, onValue, off } from "firebase/database";
import { db } from "../firebase";

const Firebase = () => {
  useEffect(() => {
    const dbRef = ref(db, "/");

    onValue(dbRef, (ss) => {
      console.log(ss.val());
    });
    return () => {
      off(dbRef);
    };
  }, []);
  return <div>Firebase</div>;
};

export default Firebase;
