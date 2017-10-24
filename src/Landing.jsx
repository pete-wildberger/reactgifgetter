import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="landing">
    <h1>Gif getter</h1>
    <input type="text" placeholder="search" />
    <Link to="/search"> Or browse all</Link>
  </div>
);

export default Landing;
