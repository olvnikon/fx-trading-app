// @flow
import React from 'react';
import type { Store } from 'redux';
import { Provider } from 'react-redux';
import type { State } from './app/store/storeTypes';
import App from './App';

type Props = {|
  +store: Store<State, *, *>,
|};

const Root = ({ store }: Props) => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
