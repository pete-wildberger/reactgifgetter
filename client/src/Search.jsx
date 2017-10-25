import React, { Component } from 'react';
import axios from 'axios';
// import GifCard from './GifCard';
import Header from './Header';

// import preload from '../data.json';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      apiData: [],
      apiObj: {}
    };
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.findGifs = this.findGifs.bind(this);
  }

  componentDidMount() {
    axios.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=').then(response => {
      console.log(response);
      console.log(this.state);
      const posts = response.data.data;
      this.setState({ apiObj: posts });
    });
  }
  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };
  findGifs(term) {
    let searchURL = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC`;
    axios.get(searchURL).then(response => {
      console.log('response ', response);
      this.setState({ apiData: response.data.data, apiObj: {} });
      console.log('Search.state ', this.state);
    });
  }
  displayGif() {
    let gif;
    let gifs;
    if (this.state.apiData.length > 0) {
      gifs = this.state.apiData;
      return gifs.map(gif => {
        return (
          <div key={gif.id}>
            <img src={gif.images.downsized.url} alt={gif.images.downsized.url} />
          </div>
        );
      });
    }
    if (this.state.apiObj != {}) {
      gif = this.state.apiObj;
      return (
        <div key={gif.image_url}>
          <img src={gif.image_url} alt={gif.image_url} />
        </div>
      );
    }
  }
  render() {
    return (
      <div className="search">
        <Header searchTerm={this.state.searchTerm} showSearch handleSearchTermChange={this.handleSearchTermChange} />
        <button onClick={() => this.findGifs(this.state.searchTerm)}>search</button>
        <div>{this.displayGif()}</div>
      </div>
    );
  }
}

export default Search;
