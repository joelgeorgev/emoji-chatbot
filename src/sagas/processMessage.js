import { put } from 'redux-saga/effects'

import translate from '../moji-translate'
import { saveMessage } from '../actions'

export const processMessage = function*({ text }) {
  yield put(saveMessage({ author: 'You', text }))
  yield put(saveMessage({ author: 'Bot', text: translate.translate(text) }))
}
