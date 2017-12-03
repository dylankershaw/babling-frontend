import React from "react";
import Logout from "./Logout";
import ChatsContainer from "./ChatsContainer";
// import NewChatContainer from './NewChatContainer;'

const ChatSelector = ({ user }) => {
  return (
    <div>
      <Logout user={user} />
      <ChatsContainer user={user} />
      {/* <NewChatContainer/> */}
    </div>
  );
};

export default ChatSelector;
