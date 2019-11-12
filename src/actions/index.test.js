import { sendMessage, saveMessage } from '.'
import { SEND_MESSAGE, SAVE_MESSAGE } from '../constants/ActionTypes'

describe('actions', () => {
  test('sendMessage creates SEND_MESSAGE action', () => {
    const text = 'Hello World'
    const expected = { type: SEND_MESSAGE, text }

    expect(sendMessage(text)).toEqual(expected)
  })

  test('saveMessage creates SAVE_MESSAGE action', () => {
    const payload = { author: 'You', text: 'Hello World' }
    const expected = { type: SAVE_MESSAGE, payload }

    expect(saveMessage(payload)).toEqual(expected)
  })
})
