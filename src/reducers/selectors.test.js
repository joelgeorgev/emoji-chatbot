import * as selectors from '.'

describe('Selectors', () => {
  describe('getMessages', () => {
    const { getMessages } = selectors

    test('selects messages from state', () => {
      const messages = [{ text: 'Hello' }]

      expect(getMessages({ messages })).toEqual(messages)
    })
  })
})
