import { sendMessage } from './index'
import { SEND_MESSAGE } from '../constants/ActionTypes'

describe('actions test', () => {
  it('sendMessage should create SEND_MESSAGE action', () => {
    expect(sendMessage('Hello World')).toEqual({
      type: SEND_MESSAGE,
      message: 'Hello World'
    })
  })
})