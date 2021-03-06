import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import { store, persistor } from './store';
import Routes from './routes';
import history from './services/history';
import GlobaStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <GlobaStyle />
          <ToastContainer autoClose={3000} />
          <Routes />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
