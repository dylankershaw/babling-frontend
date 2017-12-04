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
    // const newMessages = this.state.messages.concat(message);
    let messages = this.state.messages;
    if (!this.containsMessage(message, this.state.messages)) {
      // debugger;
      messages.push(message);
    }
    this.setState({ messages });
  };

  containsMessage(message, messages) {
    for (let i = 0; i < messages.length; i++) {
      if (messages[i].id === message.id) {
        return true;
      }
    }
    return false;
  }

  fetchChat(chatId) {
    // get chat from api
    fetch(`https://babling-backend.herokuapp.com/api/v1/chats/${chatId}`)
      .then(resp => resp.json())
      .then(
        // chat => chat.messages.map(message => console.log(message))
        chat => chat.messages.map(message => this.fetchMessage(message.id))
      );
  }

  componentDidMount = () => {
    // fetch and populate messages
    this.props.chat.messages.map(message => {
      this.fetchMessage(message.id);
    });
    // setInterval(this.fetchChat(this.props.chat.id), 1000);
    // console.log(this.props);
    setInterval(() => {
      // console.log("Hello");
      // console.log(this.props.chat.id);
      this.fetchChat(this.props.chat.id);
    }, 1000);
  };

  render() {
    return (
      <div>
        {this.state.messages
          .sort(function(a, b) {
            return a.created_at - b.created_at;
          })
          .map(message => <Message key={message.id} message={message} />)}
      </div>
    );
  }
}

export default ChatBoxContainer;
