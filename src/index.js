// @flow
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root');
if (rootElement === null) {
  throw new Error('no root element');
}

ReactDOM.render(<App />, rootElement);
registerServiceWorker();
