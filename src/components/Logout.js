import React from "react";
import { Link } from "react-router-dom";

const Logout = ({ user }) => {
  return (
    <div>
      <h2 align="right">
        {" "}
        Welcome {user.username}
        <Link to={"/"}>
          {" "}
          <h3>Logout </h3>
        </Link>{" "}
      </h2>
    </div>
  );
};

export default Logout;
