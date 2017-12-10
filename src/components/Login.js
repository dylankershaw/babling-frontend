import React from "react";
import { Input, Button } from "semantic-ui-react";

const Login = ({ changeSelection, fetchUser }) => {
  const handleSubmit = ev => {
    ev.preventDefault();
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    fetchUser(username.value.toLowerCase(), password.value);
    username.value = "";
    password.value = "";
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
          <input
            type="submit"
            className="ui red inverted button"
            value="LOG IN"
          />
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
