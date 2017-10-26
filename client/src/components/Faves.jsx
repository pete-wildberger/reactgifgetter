import React from 'react';
import { Link } from 'react-router-dom';

const Faves = props => {
  let gifs = props;
  return gifs.map(gif => {
    return (
      <div className="col-3" key={gif.id}>
        <img src={gif.images.downsized.url} alt={gif.images.downsized.url} />
        <button onClick={() => this.removeGif(gif.id)}>X</button>
      </div>
    );
  });
};
