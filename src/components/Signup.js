import React from "react";
import { Input } from "semantic-ui-react";

const Signup = props => {
  // const postUser = () => {
  //   debugger;
  //   fetch("https://babling-backend.herokuapp.com/api/v1/users", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       username: "testusername2",
  //       password: "password"
  //     }),
  //     headers: { "Content-Type": "application/json" }
  //   }).then(resp => console.log(resp));
  //   // .then call props.fetchUser(username)
  // };

  return (
    <div>
      <br />
      <br />
      <div align="center">
        <form>
          <label htmlFor="username">Username: </label>
          <Input id="username" />
          <br />
          <br />
          <label htmlFor="password">Password: </label>
          <Input id="password" />
          <br />
          <br />
          <input type="submit" class="ui blue button" value="SIGN UP" />
        </form>
        <br />
        <div>
          <span>Already have an account? </span>
          <b>
            <a onClick={() => props.changeSelection("Login")}>Log in</a>
          </b>
        </div>
      </div>
    </div>
  );
};

export default Signup;
