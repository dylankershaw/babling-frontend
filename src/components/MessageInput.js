import React from "react";
import { Input } from "semantic-ui-react";

const MessageInput = ({ chatId, senderName, selectedLanguage }) => {
  const handleSubmit = ev => {
    ev.preventDefault();
    const messageText = document.getElementById("message-text").value;
    document.getElementById("message-text").value = "";
    postMessage(chatId, messageText, selectedLanguage, senderName);
  };

  const postMessage = (chatId, messageText, language, senderName) => {
    // create a new message with chatId and senderName
    fetch("https://babling-backend.herokuapp.com/api/v1/messages/", {
      method: "POST",
      body: JSON.stringify({
        chat_id: chatId,
        sender_name: senderName
      }),
      headers: { "Content-Type": "application/json" }
    }).then(resp => postTranslation(messageText, language));
  };

  const postTranslation = (messageText, language) => {
    // create translation with messageText and language
    fetch("https://babling-backend.herokuapp.com/api/v1/translations/", {
      method: "POST",
      body: JSON.stringify({
        text: messageText,
        language: language
      }),
      headers: { "Content-Type": "application/json" }
    });
  };

  // check to see if there is a translation for each language within the chat
  // if not, then call yandex and create translation(s)

  return (
    <div>
      <form
        onSubmit={ev => {
          handleSubmit(ev);
        }}
      >
        <Input id="message-text" type="text" placeholder="enter your message" />
        <input type="submit" class="ui violet inverted button" value="SEND" />
      </form>
    </div>
  );
};

export default MessageInput;
