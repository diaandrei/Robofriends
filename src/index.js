import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import 'tachyons';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { requestRobots, searchRobots } from './reducers';

import './index.css';

const logger = createLogger();

const rootReducers = combineReducers({ requestRobots, searchRobots });

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger));

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} else {
  console.error('Could not find root element to mount the application.');
}

registerServiceWorker();
