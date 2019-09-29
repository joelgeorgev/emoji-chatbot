import { getMessages } from '.'

describe('Selectors', () => {
  test('getMessages should select messages from state', () => {
    const messages = [{ text: 'Hello World' }]
    expect(getMessages({ messages })).toEqual(messages)
  })
})
