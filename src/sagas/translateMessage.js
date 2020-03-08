import { put } from 'redux-saga/effects'

import translate from '../moji-translate'
import { messageTranslated } from '../actions'

export const translateMessage = function*({ payload: { text } }) {
  yield put(messageTranslated(translate.translate(text)))
}
