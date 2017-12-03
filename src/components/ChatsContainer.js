import React from "react";
import ChatLink from "./ChatLink";

const ChatsContainer = ({ user }) => {
  // returns the user in a chat who is not the current user
  function getUsername(users, currentUser) {
    return users.find(user => {
      return user.username !== currentUser.username;
    });
  }

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
          />
        );
      })}
    </div>
  );
};

export default ChatsContainer;
