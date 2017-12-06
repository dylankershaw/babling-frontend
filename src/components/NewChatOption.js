import React from "react";

const NewChatOption = ({ user, chatUser }) => {
  const postChat = (user1, user2) => {
    fetch(`http://localhost:3000/api/v1/chats/`, {
      method: "POST",
      body: JSON.stringify({
        user1id: user1.id,
        user2id: user2.id
      }),
      headers: { "Content-Type": "application/json" }
    }).then(resp => console.log(resp));
  };

  const handleClick = ev => {
    ev.preventDefault();
    postChat(user, chatUser);
  };

  return (
    <div>
      <button onClick={ev => handleClick(ev)}>{chatUser.username}</button>
      <br />
    </div>
  );
};

export default NewChatOption;
