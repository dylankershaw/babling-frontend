import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import { debug } from "util";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

class AuthContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selection: "Login"
    };
  }

  // fetches the user with their username and password
  fetchUser = (username, password) => {
    fetch(`http://localhost:3000/api/v1/users/login/${username}/${password}`)
      .then(resp => resp.json())
      .then(user => this.props.setUser(user));
  };

  changeSelection = selection => {
    this.setState({ selection });
  };

  render() {
    if (this.state.selection === "Login") {
      return (
        <Login
          changeSelection={this.changeSelection}
          fetchUser={this.fetchUser}
        />
      );
    } else {
      return (
        <Signup
          changeSelection={this.changeSelection}
          fetchUser={this.fetchUser}
        />
      );
    }
  }
}

export default AuthContainer;
