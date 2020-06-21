import { runSaga } from 'redux-saga'

import { translateMessage } from './translateMessage'
import { sendMessage, messageTranslated } from '../actions'

jest.mock('../moji-translate', () => ({
  translate: () => '🐱‍🏍'
}))

const sentMessage = 'Hello'

const executeSaga = (dispatch, text) =>
  runSaga({ dispatch }, translateMessage, sendMessage(text))

describe('translateMessage saga', () => {
  let dispatch

  beforeEach(() => {
    dispatch = jest.fn()
  })

  describe('When a message is sent', () => {
    beforeEach(() => {
      executeSaga(dispatch, sentMessage)
    })

    test('dispatches an action to save the translated message', () => {
      expect(dispatch).toHaveBeenCalledTimes(1)
      expect(dispatch).toHaveBeenCalledWith(messageTranslated('🐱‍🏍'))
    })
  })
})
