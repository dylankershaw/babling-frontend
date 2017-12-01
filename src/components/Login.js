import React from "react";

const Login = props => {
  return (
    <div>
      <form>
        <input id="username" />
        <label htmlFor="username">Username </label>

        <input id="password" />
        <label htmlFor="password">Password </label>
        <input type="submit" value="Log In" />
      </form>
      <br />
      <div>
        <span>Don't have an account yet? </span>
        <a onClick={() => props.changeSelection("Signup")}>Sign up</a>
      </div>
    </div>
  );
};

export default Login;
