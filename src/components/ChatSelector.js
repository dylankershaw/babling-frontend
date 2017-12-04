import React from "react";
import Logout from "./Logout";
import ChatsContainer from "./ChatsContainer";
// import NewChatContainer from './NewChatContainer;'

const ChatSelector = ({ user, setChat, redirect }) => {
  return (
    <div>
      <Logout user={user} />
      <ChatsContainer user={user} setChat={setChat} redirect={redirect} />
      {/* <NewChatContainer/> */}
    </div>
  );
};

export default ChatSelector;
