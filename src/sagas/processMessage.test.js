import { runSaga } from 'redux-saga'

import { processMessage } from './processMessage'
import { sendMessage, saveMessage } from '../actions'

jest.mock('../moji-translate', () => ({
  translate: () => '🐱‍🏍'
}))

const executeSaga = (dispatch, text) =>
  runSaga({ dispatch }, processMessage, sendMessage(text))

describe('processMessage saga', () => {
  const text = 'Hello'
  let dispatch

  beforeEach(() => {
    dispatch = jest.fn()
    executeSaga(dispatch, text)
  })

  test('dispatches actions to save user and bot messages', () => {
    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(dispatch).toHaveBeenNthCalledWith(
      1,
      saveMessage({ author: 'You', text })
    )
    expect(dispatch).toHaveBeenNthCalledWith(
      2,
      saveMessage({ author: 'Bot', text: '🐱‍🏍' })
    )
  })
})
