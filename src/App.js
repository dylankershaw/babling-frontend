import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import AuthContainer from "./components/AuthContainer";
import ChatSelector from "./components/ChatSelector";
import { debug } from "util";
// import ChatRoomContainer from './components/ChatRoomContainer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }

  // setUser = user => {
  //   console.log("setting user");
  //   this.setState({ user });
  // };

  // componentDidUpdate() {
  //   // if a user is logged in, redirect them to chat-selector
  //   if (Object.keys(this.state.user).length > 0) {
  //     console.log("logged in");
  //     console.log(this.state.user);
  //     console.log(this.props);
  //   }
  // }

  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={props => <AuthContainer {...props} />}
          />
          <Route
            exact
            path="/chat-selector"
            render={props => <ChatSelector {...props} user={this.state.user} />}
          />
          {/* <Route exact path='/chatroom' component={ChatRoomContainer}/> */}
        </div>
      </Router>
    );
  }
}

export default App;
