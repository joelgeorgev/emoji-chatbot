import { takeEvery, put } from 'redux-saga/effects'

import translate from '../moji-translate'
import { saveMessage } from '../actions'
import { SEND_MESSAGE } from '../constants/ActionTypes'

function* processMessage(action) {
  yield put(saveMessage({ author: 'You', message: action.message }))
  yield put(
    saveMessage({ author: 'Bot', message: translate.translate(action.message) })
  )
}

export const saga = function*() {
  yield takeEvery(SEND_MESSAGE, processMessage)
}
