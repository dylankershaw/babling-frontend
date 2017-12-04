import React from "react";

const Message = ({ message }) => {
  return <div>{`${message.sender_name}: ${message.translations[0].text}`}</div>;
};

export default Message;
