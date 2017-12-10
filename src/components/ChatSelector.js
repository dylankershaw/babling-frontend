import React from "react";
import Logout from "./Logout";
import ChatsContainer from "./ChatsContainer";
import NewChatContainer from "./NewChatContainer";

const ChatSelector = ({ user, setChat, redirect, setUser }) => {
  return (
    <div>
      <Logout user={user} setUser={setUser} />
      <ChatsContainer user={user} setChat={setChat} redirect={redirect} />
      <br />
      <NewChatContainer user={user} setChat={setChat} redirect={redirect} />
    </div>
  );
};

export default ChatSelector;
