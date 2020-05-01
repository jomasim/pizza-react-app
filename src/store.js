import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { logger } from 'redux-logger';
import rootReducer from './reducers';

const middleware = process.env.NODE_ENV !== 'production'
  ? [reduxImmutableStateInvariant(), thunk]
  : [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware, logger))
);

export default store;