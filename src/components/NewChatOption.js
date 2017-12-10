import React from "react";
import { Button } from "semantic-ui-react";

const NewChatOption = ({ user, chatUser, setChat, redirect }) => {
  const postChat = (user1, user2) => {
    fetch(`https://babling-backend.herokuapp.com/api/v1/chats/`, {
      method: "POST",
      body: JSON.stringify({
        user1id: user1.id,
        user2id: user2.id
      }),
      headers: { "Content-Type": "application/json" }
    }).then(fetchAndSetLatestChat());
  };

  // fetches all chats then fetches then fetches and sets the last one
  const fetchAndSetLatestChat = () => {
    fetch("https://babling-backend.herokuapp.com/api/v1/chats/")
      .then(resp => resp.json())
      .then(json =>
        fetchChat(
          json
            // orders chats by id
            .sort(function(a, b) {
              return a.id - b.id;
            })
            // selects the last one
            .slice(-1)[0].id
        )
      );
  };

  const fetchChat = id => {
    fetch(`https://babling-backend.herokuapp.com/api/v1/chats/${id}`)
      .then(resp => resp.json())
      .then(chat => (setChat(chat), redirect()));
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
