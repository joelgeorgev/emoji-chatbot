import { sendMessage, saveUserMessage, saveBotMessage } from '.'
import {
  SEND_MESSAGE,
  SAVE_USER_MESSAGE,
  SAVE_BOT_MESSAGE
} from '../constants/ActionTypes'

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

  describe('saveUserMessage', () => {
    test('creates SAVE_USER_MESSAGE action', () => {
      expect(saveUserMessage(text)).toEqual({
        type: SAVE_USER_MESSAGE,
        payload: { text }
      })
    })
  })

  describe('saveBotMessage', () => {
    test('creates SAVE_BOT_MESSAGE action', () => {
      expect(saveBotMessage(text)).toEqual({
        type: SAVE_BOT_MESSAGE,
        payload: { text }
      })
    })
  })
})
