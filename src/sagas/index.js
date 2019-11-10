import { all, takeEvery } from 'redux-saga/effects'

import { SEND_MESSAGE } from '../constants/ActionTypes'
import { processMessage } from './processMessage'

export const rootSaga = function*() {
  yield all([takeEvery(SEND_MESSAGE, processMessage)])
}
