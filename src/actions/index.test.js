import { sendMessage, saveMessage } from './index'
import { SEND_MESSAGE, SAVE_MESSAGE } from '../constants/ActionTypes'

describe('actions', () => {
  test('sendMessage should create SEND_MESSAGE action', () => {
    const message = 'Hello World'
    const expected = { type: SEND_MESSAGE, message }
    expect(sendMessage(message)).toEqual(expected)
  })

  test('saveMessage should create SAVE_MESSAGE action', () => {
    const payload = { author: 'You', message: 'Hello World' }
    const expected = {
      type: SAVE_MESSAGE,
      payload: {
        author: payload.author,
        message: payload.message
      }
    }
    expect(saveMessage(payload)).toEqual(expected)
  })
})
