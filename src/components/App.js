import React from 'react';
import fetchCharacters from '../api/fetchCharacters';
import CharactersList from './CharactersList';
import Header from './Header';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: []
    }
  }


  componentDidMount() {
    fetchCharacters().then(characters => this.setState({ characters }));
  }

  render() {

    return (
      <div>
        < Header />
        < CharactersList characters={this.state.characters} />
      </div>
    );
  }
}

export default App;
