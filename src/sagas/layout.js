import { put, takeEvery } from 'redux-saga/effects'

// worker Saga: will be fired on actions
function* setSelectedKeys(action) {
  try {
    yield put({ type: 'SET_SELECTED_KEYS', keys: action.payload.keys });
  } catch (e) {

  }
}

function* layoutSaga() {
  yield takeEvery('SET_SELECTED_KEYS', setSelectedKeys);
}

export default layoutSaga;
