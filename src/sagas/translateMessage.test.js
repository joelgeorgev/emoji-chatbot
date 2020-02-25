import { runSaga } from 'redux-saga'

import { translateMessage } from './translateMessage'
import { sendMessage, saveTranslatedMessage } from '../actions'

jest.mock('../moji-translate', () => ({
  translate: () => '🐱‍🏍'
}))

const userMessage = 'Hello'

const executeSaga = (dispatch, text) =>
  runSaga({ dispatch }, translateMessage, sendMessage(text))

describe('translateMessage saga', () => {
  let dispatch

  beforeEach(() => {
    dispatch = jest.fn()
    executeSaga(dispatch, userMessage)
  })

  test('dispatches an action to save the translated message', () => {
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith(saveTranslatedMessage('🐱‍🏍'))
  })
})
