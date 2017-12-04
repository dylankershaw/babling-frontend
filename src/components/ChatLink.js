import React from "react";
import { Link } from "react-router-dom";

const ChatLink = ({ id, username, setChat }) => {
  const fetchChat = id => {
    console.log(id);
  };

  const handleClick = ev => {
    ev.preventDefault();
    console.log("clicked");
    fetchChat(id);
  };

  return <button onClick={ev => handleClick(ev)}>{username}</button>;
};

export default ChatLink;
