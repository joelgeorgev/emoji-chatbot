import { reducer } from '.'
import { sendMessage, messageTranslated } from '../actions'

const createState = (partialState) => ({
  messages: [],
  ...partialState
})

describe('reducer', () => {
  test('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      createState({
        messages: [
          {
            author: 'Bot',
            text: 'Write a message and see it translated to emojis!'
          }
        ]
      })
    )
  })

  describe('When a message is sent', () => {
    const message = 'Hello'
    let newState

    beforeEach(() => {
      const action = sendMessage(message)

      newState = reducer(createState(), action)
    })

    test('returns messages appended with the sent message', () => {
      expect(newState).toEqual(
        createState({
          messages: [
            {
              author: 'You',
              text: message
            }
          ]
        })
      )
    })
  })

  describe('When a message is translated', () => {
    const translatedMessage = '🐱‍🏍'
    let newState

    beforeEach(() => {
      const action = messageTranslated(translatedMessage)

      newState = reducer(createState(), action)
    })

    test('returns messages appended with the translated message', () => {
      expect(newState).toEqual(
        createState({
          messages: [
            {
              author: 'Bot',
              text: translatedMessage
            }
          ]
        })
      )
    })
  })
})
