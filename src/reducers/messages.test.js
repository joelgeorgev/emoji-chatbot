import { messages } from './messages'

describe('reducers test', () => {
  it('should handle initial state', () => {
    expect(messages(undefined, {})).toEqual([])
  })

  it('should handle SAVE_MESSAGE', () => {
    expect(messages([], { type: 'SAVE_MESSAGE', payload: { author: 'You', message: 'Hello World' } }))
      .toEqual([{ author: 'You', message: 'Hello World' }])
  })
})