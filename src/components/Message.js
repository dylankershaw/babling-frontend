import React from "react";

const Message = ({ message }) => {
  const createdAt = new Date(message.created_at);
  const timestamp = `${createdAt.getHours()}:${createdAt.getMinutes()}`;
  return (
    <div>{`${timestamp} ${message.sender_name}: ${
      message.translations[0].text
    }`}</div>
  );
};

export default Message;
