import React from "react";
import ChatBoxContainer from "./ChatBoxContainer";
import MessageInput from "./MessageInput";

const ChatroomContainer = ({ chat, user }) => {
  return (
    <div>
      <ChatBoxContainer chat={chat} />
      <MessageInput chatId={chat.id} senderName={user.username} />
    </div>
  );
};

export default ChatroomContainer;
