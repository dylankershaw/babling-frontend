import React from "react";

const NewChatOption = ({ user }) => {
  return <div>{user.username}</div>;
};

export default NewChatOption;

// postChat = () => {
//   fetch("http://localhost:3000/api/v1/chats/", {
//     method: "POST",
//     body: JSON.stringify({
//       chat_id: chatId
//       // add both users to chat.users
//     }),
//     headers: { "Content-Type": "application/json" }
//   });
// };
