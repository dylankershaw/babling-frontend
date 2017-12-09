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
    // console.log("setting chat");
    this.setState({ chat });
  };

  clearChat = () => {
    this.setState({
      redirect: true,
      chat: {}
    });
  };

  setUser = user => {
    if (user.id) {
      this.setState({ user });
      this.redirect();
    } else {
      this.authContainer.invalidLogin();
    }
  };

  redirect = () => {
    this.setState({ redirect: true });
  };

  redirectOff = () => {
    this.setState({ redirect: false });
  };

  // componentWillMount() {
  //   if (this.state.redirect) {
  //     this.setState({ redirect: false });
  //   }
  // }

  render() {
    // returns true if user is logged in & redirect is on & there is no chat
    if (
      Object.keys(this.state.user).length > 0 &&
      this.state.redirect === true &&
      Object.keys(this.state.chat).length === 0
    ) {
      this.redirectOff();
      // console.log("logged in");
      return (
        <Router>
          <Redirect to="/chat-selector" />
        </Router>
      );
      // return true if there is a chat & redirect is on
    } else if (
      Object.keys(this.state.chat).length > 0 &&
      this.state.redirect === true
    ) {
      this.redirectOff();
      return (
        <Router>
          <Redirect to="/chatroom" />
        </Router>
      );
      // returns true if user is not logged in not on root
    } else if (
      Object.keys(this.state.user).length === 0 &&
      this.props.location.split("/").slice(-1)[0] !== ""
    ) {
      return (
        <Router>
          <div>
            <Redirect to="/" />
            <Route
              exact
              path="/"
              render={props => (
                <AuthContainer
                  {...props}
                  ref={instance => {
                    this.authContainer = instance;
                  }}
                  setUser={this.setUser}
                  redirect={this.redirect}
                />
              )}
            />
          </div>
        </Router>
      );
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
                ref={instance => {
                  this.authContainer = instance;
                }}
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
                redirect={this.redirect}
                setUser={this.setUser}
              />
            )}
          />
          <Route
            exact
            path="/chatroom"
            render={props => (
              <ChatroomContainer
                {...props}
                user={this.state.user}
                chat={this.state.chat}
                redirect={this.redirect}
                clearChat={this.clearChat}
                setUser={this.setUser}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
