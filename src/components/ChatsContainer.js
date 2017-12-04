import React from "react";
import ChatLink from "./ChatLink";

const ChatsContainer = ({ user, setChat, redirect }) => {
  // returns the user in a chat who is not the current user
  function getUsername(users, currentUser) {
    return users.find(user => {
      return user.username !== currentUser.username;
    });
  }

  //// need to safeguard against a user having no chats (cannot map on undefined)
  user.chats.map(chat => {});

  return (
    <div>
      <h3>Your Chats</h3>
      {user.chats.map(chat => {
        return (
          <ChatLink
            key={chat.id}
            id={chat.id}
            username={getUsername(chat.users, user).username}
            setChat={setChat}
            redirect={redirect}
          />
        );
      })}
    </div>
  );
};

export default ChatsContainer;
