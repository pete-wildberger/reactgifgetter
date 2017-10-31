import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

class Faves extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faves: []
    };
    this.findGifs = this.findGifs.bind(this);
    this.displayGif = this.displayGif.bind(this);
  }
  findGifs() {
    axios.get('/faves').then(response => {
      console.log('response ', response);
      this.setState({ faves: response.data });
      console.log('Faves.state ', this.state);
    });
  }
  displayGif() {
    console.log(this.state);
    let gifs = this.state.faves;
    return gifs.map(gif => {
      return (
        <div className="col-3" key={gif.id}>
          <img src={gif.images.downsized.url} alt={gif.images.downsized.url} />
        </div>
      );
    });
  }
  componentDidMount() {
    this.findGifs();
  }
  render() {
    return <div className="row">{this.displayGif()}</div>;
  }
}
export default Faves;
