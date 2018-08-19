import { takeEvery, put } from 'redux-saga/effects'

import translate from './moji-translate'
import { saveMessage } from './actions'
import { SEND_MESSAGE } from './constants/ActionTypes'

function* processMessage(actionObj) {
  yield put(saveMessage({
    author: 'You',
    message: actionObj.message
  }))
  yield put(saveMessage({
    author: 'Bot',
    message: translate.translate(actionObj.message)
  }))
}

function* saga() {
  yield takeEvery(SEND_MESSAGE, processMessage)
}

export default saga