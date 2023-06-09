import React, { useEffect, useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import withAuthContext from "../HOCs/withAuthContext";

// const Logout = (props) => {
//   // const { isAuth, logout } = useContext(AuthContext);
//   const navigate = useNavigate();
//   useEffect(() => {
//     if (!props.isAuth) {
//       navigate("/");
//     }
//   }, [props.isAuth]);
//   return (
//     <>
//       <h1 className="title">Logout</h1>
//       <p>
//         <button className="button" onClick={props.logout}>
//           Logout
//         </button>
//       </p>
//     </>
//   );
// };

// export default withAuthContext(Logout);

// const LogoutWithAuthContext = withAuthContext(Logout);

export const Logout = withAuthContext(function (props) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!props.isAuth) {
      navigate("/");
    }
  }, [props.isAuth]);
  return (
    <>
      <h1 className="title">Logout</h1>
      <p>
        <button className="button" onClick={props.logout}>
          Logout
        </button>
      </p>
    </>
  );
});
