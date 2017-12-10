import React from "react";

const ChatsButton = ({ clearChat, redirect }) => {
  const handleClick = () => {
    clearChat();
    redirect();
  };

  return (
    <div>
      <button
        className="ui inverted purple button"
        onClick={() => {
          handleClick();
        }}
      >
        Return to Chats
      </button>
    </div>
  );
};

export default ChatsButton;
