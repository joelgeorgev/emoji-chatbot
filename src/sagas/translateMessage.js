import { put } from 'redux-saga/effects'

import translate from '../moji-translate'
import { saveTranslatedMessage } from '../actions'

export const translateMessage = function*({ payload: { text } }) {
  yield put(saveTranslatedMessage(translate.translate(text)))
}
