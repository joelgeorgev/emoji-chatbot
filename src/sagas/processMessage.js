import { put } from 'redux-saga/effects'

import translate from '../moji-translate'
import { saveUserMessage, saveBotMessage } from '../actions'

export const processMessage = function*({ payload: { text } }) {
  yield put(saveUserMessage(text))
  yield put(saveBotMessage(translate.translate(text)))
}
