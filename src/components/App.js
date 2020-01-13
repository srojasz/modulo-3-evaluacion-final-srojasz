import React from 'react';
import { Route, Switch } from 'react-router-dom';
import fetchCharacters from '../api/fetchCharacters';
import Header from './Header';
import Filters from './Filters';
import CharactersList from './CharactersList';
import CharacterDetail from './CharacterDetail';


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
      return characters.filter(character => character.name.toLowerCase().includes(inputText.toLowerCase()))
    }
  }

  // fetch
  componentDidMount() {
    fetchCharacters().then(characters => this.setState({ characters }));
  }

  // render(

  renderCharacterDetail() {
    return (
      < CharacterDetail characters={this.state.characters} />
    );
  }

  render() {
    console.log(this.state.search)
    return (
      <div>
        < Header />
        < Filters
          handleSearch={this.handleSearch} />
        <Switch>
          <Route exact path='/'>
            < CharactersList characters={this.filterSearch()} />
          </Route>
          <Route path='/character/:id' render={this.renderCharacterDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
