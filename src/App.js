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
      user: {
        id: 2,
        username: "Dylan",
        chats: [
          {
            id: 2,
            users: [
              {
                id: 2,
                username: "Dylan",
                created_at: "2017-12-01T16:38:12.777Z",
                updated_at: "2017-12-01T16:38:12.777Z",
                password: null
              },
              {
                id: 3,
                username: "Elbin",
                created_at: "2017-12-01T16:38:15.975Z",
                updated_at: "2017-12-01T16:38:15.975Z",
                password: null
              }
            ]
          }
        ]
      },
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

  //// does this need to be in a callback or can it happen inline?
  redirectOff = () => {
    this.setState({ redirect: false });
  };

  render() {
    if (
      Object.keys(this.state.user).length > 0 &&
      this.state.redirect === true &&
      Object.keys(this.state.chat).length === 0
    ) {
      this.redirectOff();
      console.log("logged in");
      return (
        <Router>
          <Redirect to="/chat-selector" />
        </Router>
      );
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
    }
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
                redirect={this.redirect}
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
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
