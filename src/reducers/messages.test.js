import { messages, initialState } from './messages'
import { saveMessage } from '../actions'

describe('messages reducer', () => {
  describe('When no action is provided', () => {
    test('should return initial state', () => {
      expect(messages(undefined, {})).toEqual(initialState)
    })
  })

  test('should handle SAVE_MESSAGE action', () => {
    const author = 'You'
    const text = 'Hello World'
    const payload = { author, text }
    expect(messages([], saveMessage(payload))).toEqual([payload])
  })
})
