import { useEffect, useState, useContext } from "react";
import axios from "../axios.js";
import { Link, useNavigate } from "react-router-dom";
import Fetch from "../components/Fetch.jsx";
import { AuthContext } from "../context/AuthContext";

function UserListItem(props) {
  const { user, setActiveUser } = props;
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, [isAuth]);
  return (
    <>
      <tr>
        <td>
          <Link to={`/user/${user.id}`}>{user.name}</Link>
        </td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>
          <button type="button" onClick={() => setActiveUser(user.id)}>
            details
          </button>
        </td>
      </tr>
    </>
  );
}

export function UserList() {
  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState();
  useEffect(() => {
    axios.get("users").then((res) => {
      //   console.log(res.data);
      setUsers(res.data);
    });
  }, []);
  return (
    <>
      <h1 className="title">Active User : {activeUser}</h1>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>name</th>
              <th>username</th>
              <th>email</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            <Fetch uri="/users">
              {(users) => {
                return users.map((each) => {
                  return (
                    <UserListItem
                      key={each.id}
                      user={each}
                      setActiveUser={setActiveUser}
                    />
                  );
                });
              }}
            </Fetch>
            {/* {users.map((each) => {
              return (
                <UserListItem
                  key={each.id}
                  user={each}
                  setActiveUser={setActiveUser}
                />
              );
            })} */}
          </tbody>
        </table>
      </div>
    </>
  );
}
