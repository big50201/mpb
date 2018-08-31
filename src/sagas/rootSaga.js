import { all } from 'redux-saga/effects'

// sagas
import loginSaga from './login'
import layoutSaga from './layout'

// parallel load sagas
export default function* rootSaga() {
  yield all([
    loginSaga(),
    layoutSaga(),
  ])
};
