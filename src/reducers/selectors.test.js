import * as selectors from '.'

describe('Selectors', () => {
  describe('getMessages', () => {
    const { getMessages } = selectors

    test('selects messages', () => {
      const messages = [{ author: 'You', text: 'Hello' }]

      expect(getMessages({ messages })).toEqual(messages)
    })
  })
})
