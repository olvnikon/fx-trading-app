// @flow
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import type { Store } from 'redux';
import type { State } from './storeTypes';
import rootReducer from '../reducers/rootReducer';

// FixMe: flow-typed doesn't have a solution for this
declare var module: {
  hot: {
    accept(path: string, callback: () => void): void,
  },
};

export default function configureStore(
  initialState: any,
): Store<State, *, *> {
  const middlewares = [thunk];
  const middlewareEnhancer = composeWithDevTools(applyMiddleware(...middlewares));

  const store = createStore(
    rootReducer,
    initialState,
    middlewareEnhancer,
  );

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('../reducers/rootReducer', () => {
        store.replaceReducer(rootReducer);
      });
    }
  }

  return store;
}
