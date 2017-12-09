import React from "react";

const Message = ({ message, selectedLanguage }) => {
  const createdAt = new Date(message.created_at);
  const timestamp = `${createdAt.getHours()}:${createdAt.getMinutes()}`;
  const translation = message.translations.find(translation => {
    return translation.language === selectedLanguage;
  });

  if (!translation) {
    return <div>translation in progress...</div>;
  }

  return (
    <div>
      <b>{`${timestamp} ${message.sender_name}: `}</b>
      {translation.text}
    </div>
  );
};

export default Message;
