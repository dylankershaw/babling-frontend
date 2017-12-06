import React from "react";
import Message from "./Message";

class ChatBoxContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  // fetches a message then calls pushMessage on it
  fetchMessage = id => {
    fetch(`https://babling-backend.herokuapp.com/api/v1/messages/${id}`)
      .then(resp => resp.json())
      .then(message => {
        this.pushMessage(message);
      });
  };

  // checks to see if a message is already in state, then pushes it to state.messages if needed
  // replaces message if it receives a version with more translations
  pushMessage = message => {
    let messages = this.state.messages;
    //
    if (!this.containsMessageId(message, this.state.messages)) {
      messages.push(message);
    } else {
      // finds the message in messages with the id of message.id
      const stateMsg = messages.find(msg => {
        return msg.id === message.id;
      }, message);
      // find index of messages that contains stateMsg
      const i = messages.findIndex(msg => msg.id === stateMsg.id);
      //
      if (!(messages[i].translations.length === message.translations.length)) {
        // replace messages[index of message with right id] with message
        messages.splice(i, 1, message);
      }
    }
    // sorts messages by id
    messages.sort(function(a, b) {
      return a.id - b.id;
    });
    this.setState({ messages });
  };

  // returns true if there's a message in messages with the same id as message
  containsMessageId(message, messages) {
    for (let i = 0; i < messages.length; i++) {
      if (
        messages[i].id === message.id // && messages[i].translations.length === message.translations.length
      ) {
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
    setInterval(() => {
      // only trigger if kill toggle is disengaged
      if (!this.props.kill) {
        console.log("fetching chat");
        this.fetchChat(this.props.chat.id);
      }
    }, 1000);
  };

  // componentWillUpdate(nextProps, nextState) {
  //   debugger;
  // }

  render() {
    return (
      <div>
        {this.state.messages.map(message => (
          <Message
            key={message.id}
            message={message}
            selectedLanguage={this.props.selectedLanguage}
          />
        ))}
      </div>
    );
  }
}

export default ChatBoxContainer;
