import React from "react";

const Login = props => {
  const handleSubmit = ev => {
    ev.preventDefault(); // is this necessary?
    const username = document.getElementById("username").value;
    props.fetchUser(username);
  };

  return (
    <div>
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
          <a onClick={() => props.changeSelection("Signup")}>Sign up</a>
        </b>
      </div>
    </div>
  );
};

export default Login;
