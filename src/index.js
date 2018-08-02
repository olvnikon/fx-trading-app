// @flow
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './app/store/configureStore';

const rootElement = document.getElementById('root');
if (rootElement === null) {
  throw new Error('no root element');
}

const store = configureStore({});
ReactDOM.render(<Root store={store} />, rootElement);
registerServiceWorker();
