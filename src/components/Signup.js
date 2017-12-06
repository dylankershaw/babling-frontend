import React from "react";

const Signup = ({ changeSelection, fetchUser }) => {
  const handleSubmit = ev => {
    ev.preventDefault(); // is this necessary?
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    postUser(username.toLowerCase(), password);
  };

  const postUser = (username, password) => {
    fetch("http://localhost:3000/api/v1/users/", {
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
      <form onSubmit={ev => handleSubmit(ev)}>
        <label htmlFor="username">Username: </label>
        <input id="username" />
        <br />
        <label htmlFor="password">Password: </label>
        <input id="password" />
        <br />
        <input type="submit" value="Sign Up" />
      </form>
      <br />
      <div>
        <span>Already have an account? </span>
        <b>
          <a onClick={() => changeSelection("Login")}>Log in</a>
        </b>
      </div>
    </div>
  );
};

export default Signup;
