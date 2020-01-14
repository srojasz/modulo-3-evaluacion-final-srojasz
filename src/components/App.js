import React from 'react';
import { Route, Switch } from 'react-router-dom';
import fetchCharacters from '../api/fetchCharacters';
import Header from './Header';
import Filters from './Filters';
import CharactersList from './CharactersList';
import CharacterDetail from './CharacterDetail';
import Loader from './Loader';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      search: "",
      specieSelected: "All",
      characters: []
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSpecies = this.handleSpecies.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
  }

  //events

  handleSearch(inputValue) {
    this.setState({
      search: inputValue
    })
  }

  handleSpecies(specieSelected) {
    this.setState({
      specieSelected

    })

  }

  // helpers

  filterSearch() {
    const characters = this.state.characters;
    const inputText = this.state.search;
    const specieSelected = this.state.specieSelected;

    return (

      characters
        .filter(character => (character.species === specieSelected) || ("All" === specieSelected))
        .filter(character => character.name.toLowerCase().includes(inputText.toLowerCase()))
    )
  }


  // fetch
  componentDidMount() {
    fetchCharacters().then(characters => {
      if (characters === undefined) {
        this.setState({
          isLoading: true
        })
      } else {

        this.setState({
          isLoading: false,
          characters
        })

      }
    })
  }

  // render(

  renderCharacterDetail(props) {

    const routeId = parseInt(props.match.params.id);

    const selectedCharacter = this.state.characters.find(character => character.id === routeId)
    if (selectedCharacter === undefined) {
      return <h4 className="text-center mb-1">
        Personaje no encontrado
        </h4>
    } else {

      return (

        < CharacterDetail character={selectedCharacter} />
      );
    }
  }

  render() {

    const isLoading = this.state.isLoading;

    return isLoading
      ? (
        <div className="ml-5 mt-5">
          < Loader />
        </div>)
      : (
        <div className="m-2">
          < Header
          />

          <Switch>
            <Route exact path='/'>
              < Filters
                search={this.state.search}
                handleSearch={this.handleSearch}
                handleSpecies={this.handleSpecies}
              />
              < CharactersList
                characters={this.filterSearch()} />
            </Route>
            <Route
              path='/character/:id'
              render={this.renderCharacterDetail} />
          </Switch>
        </div>

      );
  }
}

export default App;
