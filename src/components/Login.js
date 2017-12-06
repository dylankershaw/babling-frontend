import React from "react";
import { Input, Button } from "semantic-ui-react";

const Login = props => {
  const handleSubmit = ev => {
    ev.preventDefault(); // is this necessary?
    const username = document.getElementById("username").value;
    props.fetchUser(username);
  };

  return (
    <div>
      <form onSubmit={ev => handleSubmit(ev)}>
        <br />
        <div align="center">
          <label htmlFor="username">Username: </label>
          <Input id="username" />
          <br />
          <br />
          <label htmlFor="password">Password: </label>
          <Input id="password" />
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
            <a onClick={() => props.changeSelection("Signup")}>Sign up</a>
          </b>
        </div>
      </div>
    </div>
  );
};

export default Login;
