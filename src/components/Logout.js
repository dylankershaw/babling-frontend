import React from "react";
import { Link } from "react-router-dom";

const Logout = ({ user }) => {
  return (
    <div>
      Welcome {user.username}
      <Link to={"/"}> Logout </Link>
    </div>
  );
};

export default Logout;
