import React from "react";
import NewChatOption from "./NewChatOption";

class NewChatContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    let users = [];

    // fetch all users
    fetch("http://localhost:3000/api/v1/users/")
      .then(resp => resp.json())
      .then(users => findUsersForNewChat(users));

    // finds all users who don't share a chat with this.props.user
    const findUsersForNewChat = fetchedUsers => {
      fetchedUsers.map(user => {
        if (this.props.user) {
          if (!sharedChatChecker(this.props.user, user)) {
            users.push(user);
          }
        }
      });

      this.setState({ users });
    };

    // returns true if two users have a common chat
    const sharedChatChecker = (user1, user2) => {
      let user1ChatIds = [];
      let sharedChatBool = false;
      user1.chats.map(chat => {
        user1ChatIds.push(chat.id);
      });
      user2.chats.map(chat => {
        if (user1ChatIds.includes(chat.id)) {
          sharedChatBool = true;
        }
      });
      return sharedChatBool;
    };
  }

  // map through each user and render a NewChatOption

  render() {
    return (
      <div>
        <h3>New Chat</h3>
        {this.state.users.map(user => {
          return <NewChatOption user={user} />;
        })}
      </div>
    );
  }
}

export default NewChatContainer;
