import React from "react";
import Login from "./Login";
import Signup from "./Signup";

class AuthContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selection: "Login"
    };
  }

  changeSelection = selection => {
    this.setState({ selection });
  };

  render() {
    if (this.state.selection === "Login") {
      return (
        <Login
          changeSelection={this.changeSelection}
          setUser={this.props.setUser}
        />
      );
    } else {
      return (
        <Signup
          changeSelection={this.changeSelection}
          setUser={this.props.setUser}
        />
      );
    }
  }
}

export default AuthContainer;
