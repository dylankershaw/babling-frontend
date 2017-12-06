import React from "react";

const Login = ({ changeSelection, fetchUser }) => {
  const handleSubmit = ev => {
    ev.preventDefault(); // is this necessary?
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    fetchUser(username.toLowerCase(), password);
  };

  return (
    <div>
      <h3>Log In</h3>
      <form onSubmit={ev => handleSubmit(ev)}>
        <label htmlFor="username">Username: </label>
        <input id="username" />
        <br />
        <label htmlFor="password">Password: </label>
        <input id="password" />
        <br />
        <input type="submit" value="Log In" />
      </form>
      <br />
      <div>
        <span>Don't have an account yet? </span>
        <b>
          <a onClick={() => changeSelection("Signup")}>Sign up</a>
        </b>
      </div>
    </div>
  );
};

export default Login;
