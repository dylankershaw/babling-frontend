import React from "react";
import { Select, Option } from "semantic-ui-react";

class SelectLanguageContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  languages = [
    { longform: "English", shortform: "en" },
    { longform: "Arabic", shortform: "ar" },
    { longform: "Chinese", shortform: "zh" },
    { longform: "French", shortform: "fr" },
    { longform: "German", shortform: "de" },
    { longform: "Icelandic", shortform: "is" },
    { longform: "Irish", shortform: "ga" },
    { longform: "Polish", shortform: "pl" },
    { longform: "Spanish", shortform: "es" },
    { longform: "Yiddish", shortform: "yi" }
  ];

  onChange = ev => {
    this.props.setLanguage(ev.target.value);
    this.patchChat(ev.target.value);
  };

  patchChat(language) {
    fetch(
      `https://babling-backend.herokuapp.com/api/v1/chats/${this.props.chatId}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "PATCH",
        body: JSON.stringify({ languages: language })
      }
    );
  }

  render() {
    return (
      <div>
        <select
          className="ui selection dropdown"
          onChange={ev => {
            this.onChange(ev);
          }}
        >
          {this.languages.map(language => {
            return (
              <option key={language.shortform} value={language.shortform}>
                {language.longform}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default SelectLanguageContainer;
