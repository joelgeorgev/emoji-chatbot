import { takeEvery, put } from 'redux-saga/effects'

function* processMessage(actionObj) {
  yield put({
    type: 'SAVE_MESSAGE',
    payload: {
      author: 'You',
      message: actionObj.message
    }
  })
  yield put({
    type: 'SAVE_MESSAGE',
    payload: {
      author: 'Bot',
      message: actionObj.message
    }
  })
}

function* saga() {
  yield takeEvery('SEND_MESSAGE', processMessage)
}

export default saga