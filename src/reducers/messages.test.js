import { messages } from './messages'
import { saveUserMessage, saveBotMessage } from '../actions'

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

  test('handles SAVE_USER_MESSAGE action', () => {
    expect(messages([], saveUserMessage(text))).toEqual([
      {
        author: 'You',
        text
      }
    ])
  })

  test('handles SAVE_BOT_MESSAGE action', () => {
    expect(messages([], saveBotMessage(text))).toEqual([
      {
        author: 'Bot',
        text
      }
    ])
  })
})
