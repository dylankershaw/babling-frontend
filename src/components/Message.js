import React from "react";

const Message = ({ message, selectedLanguage }) => {
  const createdAt = new Date(message.created_at);
  const timestamp = `${createdAt.getHours()}:${createdAt.getMinutes()}`;
  const translation = message.translations.find(translation => {
    return translation.language === selectedLanguage;
  });

  if (translation == undefined) {
    return <div>NOT TRANSLATED</div>;
  }
  return (
    <div>{`${timestamp} ${message.sender_name}: ${translation.text}`}</div>
  );
};

export default Message;
