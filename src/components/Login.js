import React from "react";
import { Input, Button } from "semantic-ui-react";

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
      <br />
      <form onSubmit={ev => handleSubmit(ev)}>
        <div align="center">
          <label htmlFor="username">Username: </label>
          <Input id="username" />
          <br />
          <br />
          <label htmlFor="password">Password: </label>
          <Input type="password" id="password" />
          <br />
          <br />
          <input type="submit" class="ui red inverted button" value="LOG IN" />
        </div>
      </form>
      <br />
      <div>
        <div align="center">
          <span>Don't have an account yet? </span>
          <b>
            <a onClick={() => changeSelection("Signup")}>Sign up</a>
          </b>
        </div>
      </div>
    </div>
  );
};

export default Login;
