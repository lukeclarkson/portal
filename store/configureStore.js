import {applyMiddleware, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {routerMiddleware} from 'connected-react-router';
import logger from 'redux-logger';

import createRootReducer from '../reducers';
import history from '../utils/history';

import {loadState, saveState} from '../utils/storageUtil';
import _ from 'lodash';

export {history};

const persistedState = loadState();

const middlewares = [thunkMiddleware, logger, routerMiddleware(history)];

const store = createStore(createRootReducer(history), persistedState, compose(
    applyMiddleware(...middlewares)
    )
);

store.subscribe(_.throttle(() => {
    saveState({
      auth: store.getState().auth
    });
  }, 1000));

export default store;