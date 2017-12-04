import React from "react";
import Logout from "./Logout";
import ChatsContainer from "./ChatsContainer";
// import NewChatContainer from './NewChatContainer;'

const ChatSelector = ({ user, setChat }) => {
  return (
    <div>
      <Logout user={user} />
      <ChatsContainer user={user} setChat={this.setChat} />
      {/* <NewChatContainer/> */}
    </div>
  );
};

export default ChatSelector;
