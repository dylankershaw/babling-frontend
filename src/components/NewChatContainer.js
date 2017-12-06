fetch("http://localhost:3000/api/v1/chats/", {
  method: "POST",
  //   body: JSON.stringify({
  //     chat_id: chatId,
  //     sender_name: senderName
  //   }),
  headers: { "Content-Type": "application/json" }
});
