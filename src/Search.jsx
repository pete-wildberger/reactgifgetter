// @flow
import React, { Component } from 'react';
import axios from 'axios';
import GifCard from './GifCard';
import Header from './Header';

// import preload from '../data.json';

class Search extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     searchTerm: 'this is a debug statement'
  //   };
  //   this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  // }
  state = {
    searchTerm: '',
    apiData: [],
    apiObj: {}
  };

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
    let searchURL = 'http://api.giphy.com/v1/gifs/search?q=';
    searchURL += term;
    searchURL += '&api_key=dc6zaTOxFJmzC';
    axios.get(searchURL).then(response => {
      console.log(response);
      console.log(this.state);
      const posts = response.data.data;
      this.setState({ apiData: posts, apiObj: {} });
    });
  }
  render() {
    let gif;
    if (this.state.apiObj != {}) {
      gif = this.state.apiObj;
    } else {
      gif = this.state.apiData;
    }
    // const items = this.props.items.map(item => (
    //   <ul key={item.id}>
    //     <li>
    //       <button onClick={() => this.displayAlert(item.email)}>{item.lastName + ', ' + item.firstName}</button>
    //     </li>
    //   </ul>
    // ));
    return (
      <div className="search">
        <Header searchTerm={this.state.searchTerm} showSearch handleSearchTermChange={this.handleSearchTermChange} />
        <button onClick={() => this.findGifs(this.state.searchTerm)}>search</button>
        <div>
          <GifCard key={gif.img_url} {...gif} />
        </div>
      </div>
    );
  }
}
export default Search;
