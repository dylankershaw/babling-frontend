import React from "react";

// class Message extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       message: props.message,
//       translation: ""
//     };
//   }

//   componentDidMount = () => {
//     this.createdAt = new Date(this.state.message.created_at);
//     this.timestamp = `${this.createdAt.getHours()}:${this.createdAt.getMinutes()}`;
//     this.setState({
//       translation: this.state.message.translations.find(translation => {
//         return translation.language === this.props.selectedLanguage;
//       })
//     });
//   };

//   render() {
//     // if (!this.translation) {
//     //   return <div>translation in progress...</div>;
//     // }
//     // return (
//     //   <div>{`${this.timestamp} ${this.state.message.sender_name}: ${
//     //     this.translation.text
//     //   }`}</div>
//     // );
//     return <div />;
//   }
// }

const Message = ({ message, selectedLanguage }) => {
  const createdAt = new Date(message.created_at);
  const timestamp = `${createdAt.getHours()}:${createdAt.getMinutes()}`;
  const translation = message.translations.find(translation => {
    return translation.language === selectedLanguage;
  });

  // if (translation == undefined) {
  if (!translation) {
    return <div>translation in progress...</div>;
  }
  return (
    <div>{`${timestamp} ${message.sender_name}: ${translation.text}`}</div>
  );
};

export default Message;
