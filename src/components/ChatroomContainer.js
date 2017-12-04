import React from "react";
import ChatBoxContainer from "./ChatBoxContainer";

const ChatroomContainer = ({ chat }) => {
  return (
    <div>
      <ChatBoxContainer chat={chat} />
    </div>
  );
};

export default ChatroomContainer;
