import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route} from 'react-router-dom';
import AuthContainer from './components/AuthContainer';
import ChatSelector from './components/ChatSelector';
// import ChatRoomContainer from './components/ChatRoomContainer';

class App extends Component {

  constructor(){
    super()

    this.state = {
      user: {}
    }
  }

  setUser = (user) => {
    this.setSet({user})
  }




  render() {
    return (
    <Router>
        <div>
          <Route exact path='/' render={props => (<AuthContainer{... props}
          setUser={this.setUser}/>)}/>
          <Route exact path='/chat-selector' component={ChatSelector}/>
          {/* <Route exact path='/chatroom' component={ChatRoomContainer}/> */}
        </div>

    </Router>
    );
  }
}

export default App;
