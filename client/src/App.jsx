import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './components/Search';
// import Faves from './components/Faves';

import './styles/main.min.css';

const FourOhFour = () => <h1>Oh no 404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route path="/" component={Search} />

        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default App;
