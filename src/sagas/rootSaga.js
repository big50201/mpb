import { all } from 'redux-saga/effects'

// sagas
import layoutSaga from './layout'

// parallel load sagas
export default function* rootSaga() {
  yield all([
    layoutSaga(),
  ])
};
