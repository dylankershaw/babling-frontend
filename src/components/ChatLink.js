import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

const ChatLink = ({ id, username, setChat, redirect }) => {
  const fetchChat = id => {
    fetch(`https://babling-backend.herokuapp.com/api/v1/chats/${id}`)
      .then(resp => resp.json())
      .then(chat => (setChat(chat), redirect()));
  };

  const handleClick = ev => {
    ev.preventDefault();
    fetchChat(id);
  };

  return (
    <Button inverted color="orange" onClick={ev => handleClick(ev)}>
      {username}
    </Button>
  );
};

export default ChatLink;
