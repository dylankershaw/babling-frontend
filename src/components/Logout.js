import React from "react";
import { Link } from "react-router-dom";

const Logout = ({ user, setUser }) => {
  return (
    <div>
      <h2 align="right">
        {" "}
        Welcome <b>{user.username} </b>
        <Link
          to={"/"}
          onClick={() => {
            setUser({});
          }}
        >
          {" "}
          <h3>Logout </h3>
        </Link>{" "}
      </h2>
    </div>
  );
};

export default Logout;
