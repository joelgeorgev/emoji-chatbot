import { sendMessage, saveMessage } from './index'
import { SEND_MESSAGE, SAVE_MESSAGE } from '../constants/ActionTypes'

describe('actions test', () => {
  it('sendMessage should create SEND_MESSAGE action', () => {
    const message = 'Hello World'
    const result = { type: SEND_MESSAGE, message }
    expect(sendMessage(message)).toEqual(result)
  })

  it('saveMessage should create SAVE_MESSAGE action', () => {
    const payload = { author: 'You', message: 'Hello World' }
    const result = {
      type: SAVE_MESSAGE,
      payload: {
        author: payload.author,
        message: payload.message
      }
    }
    expect(saveMessage(payload)).toEqual(result)
  })
})
