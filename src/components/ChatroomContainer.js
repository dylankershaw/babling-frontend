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
      selectedLanguage: "en",
      kill: false
    };
  }

  killToggle = () => {
    this.setState({ kill: !this.state.kill });
  };

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
        <ChatBoxContainer
          chat={this.props.chat}
          selectedLanguage={this.state.selectedLanguage}
          kill={this.state.kill}
        />
        <MessageInput
          chatId={this.props.chat.id}
          senderName={this.props.user.username}
          selectedLanguage={this.state.selectedLanguage}
        />

        <br />
        <SelectLanguageContainer
          setLanguage={this.setLanguage}
          chatId={this.props.chat.id}
        />
        <button
          onClick={() => {
            this.killToggle();
          }}
        >
          💀
          {/* <i class="cn flag" /> */}
          {/*  above we can get the flag for any country with the country code*/}
        </button>
      </div>
    );
  }
}

export default ChatroomContainer;
