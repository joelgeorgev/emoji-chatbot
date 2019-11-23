import * as selectors from '.'

describe('Selectors', () => {
  describe('getMessages', () => {
    const { getMessages } = selectors

    test('selects messages from state', () => {
      const messages = [{ text: 'Hello World' }]

      expect(getMessages({ messages })).toEqual(messages)
    })
  })
})
