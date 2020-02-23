import { all, takeEvery } from 'redux-saga/effects'

import { SEND_MESSAGE } from '../constants/ActionTypes'
import { translateMessage } from './translateMessage'

export const rootSaga = function*() {
  yield all([takeEvery(SEND_MESSAGE, translateMessage)])
}
