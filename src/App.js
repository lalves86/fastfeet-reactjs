import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import store from './store';
import Routes from './routes';
import history from './services/history';
import GlobaStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobaStyle />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
