import { messages } from './messages'
import { saveMessage } from '../actions'

describe('messages reducer', () => {
  describe('Given NO action', () => {
    test('returns initial state', () => {
      const expected = [
        {
          author: 'Bot',
          text: 'Write a message and see it translated to emojis!'
        }
      ]

      expect(messages(undefined, {})).toEqual(expected)
    })
  })

  test('handles SAVE_MESSAGE action', () => {
    const payload = { author: 'You', text: 'Hello World' }
    const action = saveMessage(payload)
    const expected = [payload]

    expect(messages([], action)).toEqual(expected)
  })
})
