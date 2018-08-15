import { takeEvery, put } from 'redux-saga/effects'
import translate from './moji-translate'

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
      message: translate.translate(actionObj.message)
    }
  })
}

function* saga() {
  yield takeEvery('SEND_MESSAGE', processMessage)
}

export default saga