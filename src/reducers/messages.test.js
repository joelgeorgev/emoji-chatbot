import { messages } from './messages'
import { sendMessage, messageTranslated } from '../actions'

const text = 'Hello'

describe('messages reducer', () => {
  test('returns the initial state', () => {
    expect(messages(undefined, {})).toEqual([
      {
        author: 'Bot',
        text: 'Write a message and see it translated to emojis!'
      }
    ])
  })

  test('handles SEND_MESSAGE action', () => {
    const action = sendMessage(text)

    expect(messages([], action)).toEqual([
      {
        author: 'You',
        text
      }
    ])
  })

  test('handles MESSAGE_TRANSLATED action', () => {
    const action = messageTranslated(text)

    expect(messages([], action)).toEqual([
      {
        author: 'Bot',
        text
      }
    ])
  })
})
