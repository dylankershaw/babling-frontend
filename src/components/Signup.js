import React from "react";

const Signup = props => {
  return (
    <div>
      <form>
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
          <a onClick={() => props.changeSelection("Login")}>Log in</a>
        </b>
      </div>
    </div>
  );
};

export default Signup;
