import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers/sample'
import mySaga from './sagas/sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger)
)

// then run the saga
sagaMiddleware.run(mySaga)

export default store
