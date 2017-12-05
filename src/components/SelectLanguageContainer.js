import React from "react";

class SelectLanguageContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  languages = [
    { text: "English", id: "en", key: 0 },
    { text: "Arabic", id: "ar", key: 1 },
    { text: "French", id: "fr", key: 2 },
    { text: "German", id: "de", key: 3 },
    { text: "Icelandic", id: "is", key: 4 },
    { text: "Irish", id: "ga", key: 5 },
    { text: "Polish", id: "pl", key: 6 },
    { text: "Malayalam", id: "ml", key: 7 },
    { text: "Spanish", id: "es", key: 8 },
    { text: "Yiddish", id: "yi", key: 9 }
  ];

  onChange = ev => {
    this.props.setLanguage(ev.target.value);
    this.patchChat(ev.target.value);
  };

  patchChat(language) {
    fetch(`http://localhost:3000/api/v1/chats/${this.props.chatId}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      method: "PATCH",
      body: JSON.stringify({ languages: language })
    }).then(resp => console.log(resp));
  }

  render() {
    return (
      <div>
        <select
          onChange={ev => {
            this.onChange(ev);
          }}
        >
          {this.languages.map(language => {
            return <option value={language.id}>{language.text}</option>;
          })}
        </select>
      </div>
    );
  }
}

export default SelectLanguageContainer;
