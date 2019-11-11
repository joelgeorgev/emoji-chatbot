import * as selectors from '.'

describe('Selectors', () => {
  const { getMessages } = selectors

  test('getMessages selects messages from state', () => {
    const messages = [{ text: 'Hello World' }]

    expect(getMessages({ messages })).toEqual(messages)
  })
})
