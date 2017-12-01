import React from "react";

const Signup = props => {
  return (
    <div>
      <form>
        <input id="username" />
        <label htmlFor="username">Username </label>
        <input id="password" />
        <label htmlFor="password">Password </label>
        <input type="submit" value="Sign Up" />
      </form>
      <br />
      <div>
        <span>Already have an account? </span>
        <a onClick={() => props.changeSelection("Login")}>Log in</a>
      </div>
    </div>
  );
};

export default Signup;
