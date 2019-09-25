import { messages, initialState } from './messages'
import { saveMessage } from '../actions'

describe('messages reducer', () => {
  test('should handle initial state', () => {
    const expected = [
      { author: initialState[0].author, message: initialState[0].message }
    ]
    expect(messages(undefined, {})).toEqual(expected)
  })

  test('should handle SAVE_MESSAGE', () => {
    const payload = { author: 'You', message: 'Hello World' }
    const expected = [{ author: payload.author, message: payload.message }]
    expect(messages([], saveMessage(payload))).toEqual(expected)
  })
})
