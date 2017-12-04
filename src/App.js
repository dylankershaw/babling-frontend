import React, { Component } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";
import AuthContainer from "./components/AuthContainer";
import ChatSelector from "./components/ChatSelector";
import { debug } from "util";
import ChatroomContainer from "./components/ChatroomContainer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      chat: {},
      redirect: false
    };
  }

  setChat = chat => {
    console.log("setting chat");
    this.setState({ chat });
  };

  setUser = user => {
    console.log("setting user");
    this.setState({ user });
  };

  redirect = () => {
    this.setState({ redirect: true });
  };

  render() {
    if (
      Object.keys(this.state.user).length > 0 &&
      this.state.redirect === true
    ) {
      this.setState({ redirect: false });
      console.log("logged in");
      return (
        <Router>
          <Redirect to="/chat-selector" />
        </Router>
      );
      // } else if (
      //   //// need to make this work
      //   Object.keys(this.state.user).length === 0 &&
      //   this.props.location.split("/").slice(-1)[0] !== ""
      // ) {
      //   console.log("not logged in");
      //   // return (
      //   //   <Router>
      //   //     <Redirect to="/" />
      //   //   </Router>
      //   // );
    }
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={props => (
              <AuthContainer
                {...props}
                setUser={this.setUser}
                redirect={this.redirect}
              />
            )}
          />
          <Route
            exact
            path="/chat-selector"
            render={props => (
              <ChatSelector
                {...props}
                user={this.state.user}
                setChat={this.setChat}
              />
            )}
          />
          <Route
            exact
            path="/chatroom"
            component={ChatroomContainer}
            chat={this.state.chat}
          />
        </div>
      </Router>
    );
  }
}

export default App;
