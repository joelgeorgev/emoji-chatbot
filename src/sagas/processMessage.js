import { put } from 'redux-saga/effects'

import translate from '../moji-translate'
import { saveMessage } from '../actions'

export const processMessage = function*(action) {
  yield put(saveMessage({ author: 'You', text: action.text }))
  yield put(
    saveMessage({ author: 'Bot', text: translate.translate(action.text) })
  )
}
