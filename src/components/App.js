import React from 'react';
import fetchCharacters from '../api/fetchCharacters';
import CharactersList from './CharactersList';


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
    console.log(this.state.characters)
    return (
      <div>
        < CharactersList characters={this.state.characters} />
      </div>
    );
  }
}

export default App;
