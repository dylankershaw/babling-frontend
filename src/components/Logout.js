import React from "react";
import { Link } from "react-router-dom";

const Logout = ({ user, setUser }) => {
  return (
    <div>
      Welcome <b>{user.username} </b>
      <br />
      <Link
        to={"/"}
        onClick={() => {
          setUser({});
        }}
      >
        Logout
      </Link>
    </div>
  );
};

export default Logout;
