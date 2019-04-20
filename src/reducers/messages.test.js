import { messages, initialState } from './messages'
import { saveMessage } from '../actions'

describe('messages reducer', () => {
  it('should handle initial state', () => {
    const result = [
      { author: initialState[0].author, message: initialState[0].message }
    ]
    expect(messages(undefined, {})).toEqual(result)
  })

  it('should handle SAVE_MESSAGE', () => {
    const payload = { author: 'You', message: 'Hello World' }
    const result = [{ author: payload.author, message: payload.message }]
    expect(messages([], saveMessage(payload))).toEqual(result)
  })
})
