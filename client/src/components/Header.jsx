import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  let utilSpace;
  if (props.showSearch) {
    utilSpace = (
      <input onChange={props.handleSearchTermChange} value={props.searchTerm} type="text" placeholder="Search" />
    );
  } else {
    utilSpace = (
      <h2>
        <Link to="/">back</Link>
      </h2>
    );
  }
  return (
    <header>
      <h1>
        <Link to="/">gifGetter!</Link>
      </h1>
      {utilSpace}
    </header>
  );
};

Header.defaultProps = { showSearch: false, handleSearchTermChange: function noop() {}, searchTerm: '' };

export default Header;
