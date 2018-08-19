import { sendMessage, saveMessage } from './index'
import { SEND_MESSAGE, SAVE_MESSAGE } from '../constants/ActionTypes'

describe('actions test', () => {
  it('sendMessage should create SEND_MESSAGE action', () => {
    expect(sendMessage('Hello World')).toEqual({
      type: SEND_MESSAGE,
      message: 'Hello World'
    })
  })

  it('saveMessage should create SAVE_MESSAGE action', () => {
    const payload = {
      author: 'You',
      message: 'Hello World'
    }
    expect(saveMessage(payload)).toEqual({
      type: SAVE_MESSAGE,
      payload: {
        author: payload.author,
        message: payload.message
      }
    })
  })
})