import React from "react";
import ChatBoxContainer from "./ChatBoxContainer";
import MessageInput from "./MessageInput";
import Logout from "./Logout";
import ChatsButton from "./ChatsButton";
import SelectLanguageContainer from "./SelectLanguageContainer";

class ChatroomContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: "en"
    };
  }

  setLanguage = language => {
    this.setState({ selectedLanguage: language });
  };

  componentDidUpdate() {
    console.log(this.state.selectedLanguage);
  }

  render() {
    return (
      <div>
        <Logout user={this.props.user} />
        <br />
        <ChatsButton clearChat={this.props.clearChat} />
        <br />
        <ChatBoxContainer chat={this.props.chat} />
        <MessageInput
          chatId={this.props.chat.id}
          senderName={this.props.user.username}
          selectedLanguage={this.state.selectedLanguage}
        />
        <br />
        <br />
        <SelectLanguageContainer setLanguage={this.setLanguage} />
      </div>
    );
  }
}

export default ChatroomContainer;
