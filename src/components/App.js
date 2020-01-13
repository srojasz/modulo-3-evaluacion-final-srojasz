import React from 'react';
import fetchCharacters from '../api/fetchCharacters';
import Header from './Header';
import Filters from './Filters';
import CharactersList from './CharactersList';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      characters: []
    }
    this.handleSearch = this.handleSearch.bind(this);
  }

  //events

  handleSearch(inputValue) {
    this.setState({
      search: inputValue
    })
  }

  // helpers

  filterSearch() {
    const characters = this.state.characters;
    const inputText = this.state.search;
    if (!inputText) {
      return characters
    } else {
      return characters.filter(character => character.name.includes(inputText))
    }
  }

  // fetch
  componentDidMount() {
    fetchCharacters().then(characters => this.setState({ characters }));
  }

  render() {
    console.log(this.state.search)
    return (
      <div>
        < Header />
        < Filters
          handleSearch={this.handleSearch} />
        < CharactersList characters={this.filterSearch()} />
      </div>
    );
  }
}

export default App;
