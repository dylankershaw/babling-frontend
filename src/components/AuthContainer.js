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
    fetch(`http://localhost:3000/api/v1/users/login/${username}/${password}`)
      .then(resp => resp.json())
      .then(user => this.props.setUser(user));
  };

  changeSelection = selection => {
    this.setState({ selection });
  };

  invalidLogin = () => {
    console.log("invalid login");
    this.setState({ invalidLogin: true });
  };

  validLogin = () => {
    this.setState({ invalidLogin: false });
  };

  componentWillMount() {
    if (this.state.invalidLogin) {
      this.setState({ invalidLogin: false });
    }
  }

  render() {
    if (this.state.selection === "Login") {
      if (this.state.invalidLogin) {
        return (
          <div>
            <Login
              changeSelection={this.changeSelection}
              fetchUser={this.fetchUser}
            />
            <p>Invalid username or password.</p>
          </div>
        );
      }
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
