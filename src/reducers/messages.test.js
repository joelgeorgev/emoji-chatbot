import { messages } from './messages'

describe('reducers test', () => {
  it('should handle initial state', () => {
    expect(messages(undefined, {})).toEqual([])
  })

  it('should handle SEND_MESSAGE', () => {
    expect(messages([], { type: 'SEND_MESSAGE', message: 'Hello World' })).toEqual(
      [
        { author: 'You', message: 'Hello World' },
        { author: 'Bot', message: 'Hello World' }
      ]
    )
  })
})