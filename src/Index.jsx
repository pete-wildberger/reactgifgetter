import React from 'react';
import { render } from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const renderApp = () => {
  render(<App />, document.getElementById('app'));
};
renderApp();
registerServiceWorker();
if (module.hot) {
  module.hot.accept('./App ', () => {
    renderApp();
  });
}
