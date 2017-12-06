import React from "react";
import Logout from "./Logout";
import ChatsContainer from "./ChatsContainer";
import NewChatContainer from "./NewChatContainer";

const ChatSelector = ({ user, setChat, redirect, setUser }) => {
  return (
    <div>
      <Logout user={user} setUser={setUser} />
      <ChatsContainer user={user} setChat={setChat} redirect={redirect} />
      <NewChatContainer user={user} />
    </div>
  );
};

export default ChatSelector;
