import { configureStore } from '@reduxjs/toolkit';
import { createReducer } from './combineReducer';
import { createInjectorsEnhancer, forceReducerReload } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import browserHistory from 'utils/history';

function configure(history: any) {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  // Create the store with saga middleware
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
    // serializableMiddleware,
  ];
  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ];

  const store = configureStore({
    reducer: createReducer(),
    middleware: [...middlewares],
    devTools:
      /* istanbul ignore next line */
      process.env.NODE_ENV !== 'production' ||
      process.env.PUBLIC_URL.length > 0,
    enhancers,
  });

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */

  //This is currently not working
  //TODO: WIP
  if (module.hot) {
    module.hot.accept('./combineReducer', () => {
      forceReducerReload(store);
    });
  }

  return store;
}

export const configureAppStore = () => configure(browserHistory);
