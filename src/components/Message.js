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
      <b>{`${
        // adds a 0 to the minute if in single digits
        timestamp.split(":")[1].length === 2
          ? timestamp
          : timestamp.split(":")[0] + ":0" + timestamp.split(":")[1]
      } ${message.sender_name}: `}</b>
      {translation.text}
    </div>
  );
};

export default Message;
