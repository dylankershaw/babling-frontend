import React from 'react';



class AuthContainer extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      selection: 'Login'
    }
  }

  render(){

    
    if (this.state.selection === 'Login'){
      return(
        <p>yoo</p>
      )
    } else {
      return(
        <p>sup</p>
      )
    }

  }

}

export default AuthContainer
