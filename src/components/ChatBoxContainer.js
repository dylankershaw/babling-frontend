import React from "react";
import Message from "./Message";

class ChatBoxContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  fetchMessage = id => {
    fetch(`https://babling-backend.herokuapp.com/api/v1/messages/${id}`)
      .then(resp => resp.json())
      .then(message => {
        this.pushMessage(message);
      });
  };

  pushMessage = message => {
    const messages = this.state.messages.concat(message);
    this.setState({ messages });
  };

  componentDidMount = () => {
    // fetch and populate messages
    this.props.chat.messages.map(message => {
      this.fetchMessage(message.id);
    });
  };
  render() {
    return (
      <div>
        {this.state.messages.map(message => <Message message={message} />)}
      </div>
    );
  }
}

export default ChatBoxContainer;
