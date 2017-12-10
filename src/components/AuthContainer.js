import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import { debug } from "util";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

class AuthContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selection: "Login",
      invalidLogin: false
    };
  }

  // fetches the user with their username and password
  fetchUser = (username, password) => {
    fetch(
      `https://babling-backend.herokuapp.com/api/v1/users/login/${username}/${
        password
      }`
    )
      .then(resp => (resp.status === 200 ? resp.json() : this.invalidLogin()))
      .then(json => (json ? this.props.setUser(json) : null));
  };

  changeSelection = selection => {
    this.invalidLogin(false);
    this.setState({ selection });
  };

  invalidLogin = (bool = true) => {
    console.log("invalid login");
    this.setState({ invalidLogin: bool });
  };

  componentWillMount() {
    if (this.state.invalidLogin) {
      this.setState({ invalidLogin: false });
    }
  }

  tagline = (
    <div align="center">
      <div>
        <b>Babling</b>
      </div>
      <div>
        <i>A Live Translation Chat App</i>
      </div>
    </div>
  );

  render() {
    if (this.state.selection === "Login") {
      if (this.state.invalidLogin) {
        return (
          <div>
            {this.tagline}
            <Login
              changeSelection={this.changeSelection}
              fetchUser={this.fetchUser}
            />
            <div style={{ color: "red", fontWeight: "bold" }} align="center">
              Invalid username or password.
            </div>
          </div>
        );
      }
      return (
        <div>
          {this.tagline}
          <Login
            changeSelection={this.changeSelection}
            fetchUser={this.fetchUser}
          />
        </div>
      );
    } else {
      return (
        <div>
          {this.tagline}
          <Signup
            changeSelection={this.changeSelection}
            fetchUser={this.fetchUser}
          />
        </div>
      );
    }
  }
}

export default AuthContainer;
