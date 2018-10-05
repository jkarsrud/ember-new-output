import ReduxService from 'ember-redux/services/redux';
import {
  createStore, applyMiddleware, compose,
} from 'redux';

import {
  reducers, enhancers,
  listOfMiddleware, setupMiddleware
} from '../redux-store';


// called by the internal ReduxService
const makeStoreInstance = (props) => {
  const { reducers, enhancers } = props;

  const storeComposer = compose(
    // sagas, maybe thunks, etc:
    applyMiddleware(...listOfMiddleware),
    // e.g.: dev tools
    enhancers
  );

  const createStoreWithMiddleware = storeComposer(createStore);

  const store = createStoreWithMiddleware(reducers);

  // start sagas
  setupMiddleware(store);

  return store;
};

export default class Redux extends ReduxService.extend({
  reducers,
  enhancers,
  makeStoreInstance
}) {
}
