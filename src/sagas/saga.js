import { takeEvery, put } from 'redux-saga/effects'

import translate from '../moji-translate'
import { saveMessage } from '../actions'
import { SEND_MESSAGE } from '../constants/ActionTypes'

function* processMessage(action) {
  yield put(saveMessage({ author: 'You', text: action.text }))
  yield put(
    saveMessage({ author: 'Bot', text: translate.translate(action.text) })
  )
}

export const saga = function*() {
  yield takeEvery(SEND_MESSAGE, processMessage)
}
