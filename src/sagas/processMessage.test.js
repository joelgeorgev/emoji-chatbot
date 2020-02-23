import { runSaga } from 'redux-saga'

import { processMessage } from './processMessage'
import { sendMessage, saveUserMessage, saveBotMessage } from '../actions'

jest.mock('../moji-translate', () => ({
  translate: () => '🐱‍🏍'
}))

const userMessage = 'Hello'

const executeSaga = (dispatch, text) =>
  runSaga({ dispatch }, processMessage, sendMessage(text))

describe('processMessage saga', () => {
  let dispatch

  beforeEach(() => {
    dispatch = jest.fn()
    executeSaga(dispatch, userMessage)
  })

  test('dispatches actions to save user and bot messages', () => {
    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(dispatch).toHaveBeenNthCalledWith(1, saveUserMessage(userMessage))
    expect(dispatch).toHaveBeenNthCalledWith(2, saveBotMessage('🐱‍🏍'))
  })
})
