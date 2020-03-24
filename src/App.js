import React from 'react';
import { Router } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';
import GlobaStyle from './styles/global';

function App() {
  return (
    <Router history={history}>
      <GlobaStyle />
      <Routes />
    </Router>
  );
}

export default App;
