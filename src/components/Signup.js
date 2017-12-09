import React from "react";
import { Input } from "semantic-ui-react";

const Signup = ({ changeSelection, fetchUser }) => {
  const handleSubmit = ev => {
    ev.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    postUser(username.toLowerCase(), password);
  };

  const postUser = (username, password) => {
    fetch("https://babling-backend.herokuapp.com/api/v1/users/", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers: { "Content-Type": "application/json" }
    }).then(resp => fetchUser(username, password));
  };

  return (
    <div>
      <h3>Sign Up</h3>
      <br />
      <div align="center">
        <form onSubmit={ev => handleSubmit(ev)}>
          <label htmlFor="username">Username: </label>
          <Input id="username" />
          <br />
          <br />
          <label htmlFor="password">Password: </label>
          <Input type="password" id="password" />
          <br />
          <br />
          <input type="submit" class="ui blue button" value="SIGN UP" />
        </form>
        <br />
        <div>
          <span>Already have an account? </span>
          <b>
            <a onClick={() => changeSelection("Login")}>Log in</a>
          </b>
        </div>
      </div>
    </div>
  );
};

export default Signup;
