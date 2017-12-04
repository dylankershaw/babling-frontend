import React from "react";

const ChatsButton = ({ clearChat }) => {
  return (
    <div>
      <button onClick={clearChat}>Return to Chats</button>
    </div>
  );
};

export default ChatsButton;
