import { sendMessage, saveTranslatedMessage } from '.'
import { SEND_MESSAGE, SAVE_TRANSLATED_MESSAGE } from '../constants/ActionTypes'

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

  describe('saveTranslatedMessage', () => {
    test('creates SAVE_TRANSLATED_MESSAGE action', () => {
      expect(saveTranslatedMessage(text)).toEqual({
        type: SAVE_TRANSLATED_MESSAGE,
        payload: { text }
      })
    })
  })
})
