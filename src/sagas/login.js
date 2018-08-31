import { takeEvery } from 'redux-saga/effects'

// worker Saga: will be fired on actions
function* getJWT(action) {
  try {
    // todo: use axios get user token

    yield localStorage.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdCB0b2tlbiIsImlhdCI6MTUxODAwMDAwMH0.yWyjMyru-uufIdwNKmDRFgv6MVpw60r6OiNTXLpJrEQ";
  } catch (e) {

  }
}

function* loginSaga() {
  yield takeEvery('GET_JWT_TOKEN', getJWT);
}

export default loginSaga;
