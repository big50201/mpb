import {
  combineReducers,
  createStore,
  applyMiddleware
} from 'redux'

// reducers
import layout from './reducers/layout';

// middlewares
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas/rootSaga'

// combine reducers
const reducer = combineReducers({
  layout,
});

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger)
)

// then run the saga
sagaMiddleware.run(rootSaga)

export default store