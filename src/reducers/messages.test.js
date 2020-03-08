import { messages } from './messages'
import { sendMessage, messageTranslated } from '../actions'

const text = 'Hello'

describe('messages reducer', () => {
  describe('Given NO action', () => {
    const action = {}
    let newState

    beforeEach(() => {
      newState = messages(undefined, action)
    })

    test('returns initial state', () => {
      expect(newState).toEqual([
        {
          author: 'Bot',
          text: 'Write a message and see it translated to emojis!'
        }
      ])
    })
  })

  test('handles SEND_MESSAGE action', () => {
    expect(messages([], sendMessage(text))).toEqual([
      {
        author: 'You',
        text
      }
    ])
  })

  test('handles MESSAGE_TRANSLATED action', () => {
    expect(messages([], messageTranslated(text))).toEqual([
      {
        author: 'Bot',
        text
      }
    ])
  })
})
