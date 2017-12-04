import React from "react";

class SelectLanguageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: { longform: "English", id: "en" }
    };
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

  render() {
    return (
      <div>
        <select>
          {this.languages.map(language => {
            return <option value={language.id}>{language.text}</option>;
          })}
        </select>
      </div>
    );
  }
}

export default SelectLanguageContainer;
