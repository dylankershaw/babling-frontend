import React from "react";
import ChatBoxContainer from "./ChatBoxContainer";
import MessageInput from "./MessageInput";
import Logout from "./Logout";

const ChatroomContainer = ({ chat, user }) => {
  return (
    <div>
      <Logout user={user} />
      <ChatBoxContainer chat={chat} />
      <MessageInput chatId={chat.id} senderName={user.username} />
    </div>
  );
};

export default ChatroomContainer;
