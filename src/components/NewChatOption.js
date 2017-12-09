import React from "react";
import { Button } from "semantic-ui-react";

const NewChatOption = ({ user, chatUser }) => {
  const postChat = (user1, user2) => {
    fetch(`https://babling-backend.herokuapp.com/api/v1/chats/`, {
      method: "POST",
      body: JSON.stringify({
        user1id: user1.id,
        user2id: user2.id
      }),
      headers: { "Content-Type": "application/json" }
    });
  };

  const handleClick = ev => {
    ev.preventDefault();
    postChat(user, chatUser);
  };

  return (
    <div>
      <Button inverted color="orange" onClick={ev => handleClick(ev)}>
        {chatUser.username}
      </Button>
      <br />
    </div>
  );
};

export default NewChatOption;
