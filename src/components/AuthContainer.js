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

  //// when adding user auth, update this fnc so it doesn't fetch the entire users list
  // fetches all users then logs in the appropriate user based on username
  fetchUser = username => {
    fetch("https://babling-backend.herokuapp.com/api/v1/users")
      .then(resp => resp.json())
      .then(users => findUser(users, username), username);

    const findUser = (users, username) => {
      const user = users.find(user => {
        return user.username.toLowerCase() === username.toLowerCase();
      });
      this.props.setUser(user);
      this.props.redirect();
    };
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
