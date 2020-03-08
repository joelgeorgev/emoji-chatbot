import { sendMessage, messageTranslated } from '.'
import { SEND_MESSAGE, MESSAGE_TRANSLATED } from '../constants/ActionTypes'

const text = 'Hello'

describe('actions', () => {
  describe('sendMessage', () => {
    test('creates SEND_MESSAGE action', () => {
      expect(sendMessage(text)).toEqual({
        type: SEND_MESSAGE,
        payload: { text }
      })
    })
  })

  describe('messageTranslated', () => {
    test('creates MESSAGE_TRANSLATED action', () => {
      expect(messageTranslated(text)).toEqual({
        type: MESSAGE_TRANSLATED,
        payload: { text }
      })
    })
  })
})
