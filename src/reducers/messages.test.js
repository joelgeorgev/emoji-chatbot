import { messages, initialState } from './messages'
import { saveMessage } from '../actions'

describe('reducers test', () => {
  it('should handle initial state', () => {
    expect(messages(undefined, {}))
      .toEqual([{ author: initialState[0].author, message: initialState[0].message }])
  })

  it('should handle SAVE_MESSAGE', () => {
    const payload = { author: 'You', message: 'Hello World' }
    expect(messages([], saveMessage(payload)))
      .toEqual([{ author: payload.author, message: payload.message }])
  })
})