import { all, takeEvery, put } from 'redux-saga/effects'

import translate from '../moji-translate'
import { saveMessage } from '../actions'
import { SEND_MESSAGE } from '../constants/ActionTypes'

const processMessage = function*(action) {
  yield put(saveMessage({ author: 'You', text: action.text }))
  yield put(
    saveMessage({ author: 'Bot', text: translate.translate(action.text) })
  )
}

const watchSendMessage = function*() {
  yield takeEvery(SEND_MESSAGE, processMessage)
}

export const rootSaga = function*() {
  yield all([watchSendMessage()])
}
