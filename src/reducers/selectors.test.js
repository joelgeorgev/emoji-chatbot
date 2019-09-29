import * as selectors from '.'

describe('Selectors', () => {
  test('getMessages should select messages from state', () => {
    const messages = [{ text: 'Hello World' }]
    expect(selectors.getMessages({ messages })).toEqual(messages)
  })
})
