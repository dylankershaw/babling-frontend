import React from "react";
import ChatBoxContainer from "./ChatBoxContainer";
import MessageInput from "./MessageInput";
import Logout from "./Logout";
import ChatsButton from "./ChatsButton";
import SelectLanguageContainer from "./SelectLanguageContainer";

const ChatroomContainer = ({ chat, user, clearChat }) => {
  return (
    <div>
      <Logout user={user} />
      <br />
      <ChatsButton clearChat={clearChat} />
      <br />
      <ChatBoxContainer chat={chat} />
      <MessageInput chatId={chat.id} senderName={user.username} />
      <br />
      <br />
      <SelectLanguageContainer />
    </div>
  );
};

export default ChatroomContainer;
