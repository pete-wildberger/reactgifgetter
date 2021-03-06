import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      apiData: [],
      apiObj: {},
      faves: []
    };
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.randomGif = this.randomGif.bind(this);
    this.findGifs = this.findGifs.bind(this);
    this.removeGif = this.removeGif.bind(this);
    this.faveGifs = this.faveGif.bind(this);
  }

  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };
  randomGif() {
    axios.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=').then(response => {
      console.log(response);
      console.log(this.state);
      const posts = response.data.data;
      this.setState({ apiData: [], apiObj: posts });
    });
  }
  findGifs(term) {
    let searchURL = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC`;
    axios.get(searchURL).then(response => {
      console.log('response ', response);
      this.setState({ apiData: response.data.data, apiObj: {} });
      console.log('Search.state ', this.state);
    });
  }
  faveGif(id) {
    let stateCopy = this.state;
    let index = stateCopy.apiData.findIndex(gif => gif.id === id);
    if (index === -1) return;
    stateCopy.faves.push(stateCopy.apiData[index]);
    this.setState(stateCopy);
    //send faves to server
    let ots = {
      faves: this.state.faves
    };
    axios.post('/faves', ots).then(response => {
      console.log('response ', response);
      console.log('Search.state ', this.state);
    });
  }

  removeGif(id) {
    let stateCopy = this.state;
    let index = stateCopy.apiData.findIndex(gif => gif.id === id);
    if (index === -1) return;
    stateCopy.apiData.splice(index, 1);
    this.setState(stateCopy);
  }
  displayGif() {
    let gif;
    let gifs;
    if (this.state.apiData.length > 0) {
      gifs = this.state.apiData;
      return gifs.map(gif => {
        return (
          <div className="col-3" key={gif.id}>
            <img src={gif.images.downsized.url} alt={gif.images.downsized.url} />
            <button onClick={() => this.removeGif(gif.id)}>X</button>
            <button onClick={() => this.faveGif(gif.id)}>Like</button>
          </div>
        );
      });
    }
    if (this.state.apiObj != {}) {
      gif = this.state.apiObj;
      return (
        <div className="col-3" key={gif.image_url}>
          <img src={gif.image_url} alt={gif.image_url} />
        </div>
      );
    }
  }

  componentDidMount() {
    this.randomGif();
  }

  render() {
    return (
      <div className="app">
        <Header searchTerm={this.state.searchTerm} showSearch handleSearchTermChange={this.handleSearchTermChange} />
        <button onClick={() => this.findGifs(this.state.searchTerm)}>Search Gifs</button>
        <button onClick={() => this.randomGif()}>Random Gif</button>
        <Link to="/faves">
          <button>Faves</button>
        </Link>
        <div className="row">{this.displayGif()}</div>
        <Footer />
      </div>
    );
  }
}

export default Search;
