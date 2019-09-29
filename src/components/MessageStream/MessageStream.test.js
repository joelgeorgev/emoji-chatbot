import React from 'react'
import { render } from '@testing-library/react'

import { MessageStream } from '.'

describe('MessageStream', () => {
  describe('When given an array of messages', () => {
    const createMessage = (text) => ({ author: '', text })
    const createMessages = (texts) => texts.map(createMessage)
    const [firstText, secondText] = ['Hello', 'Hi']

    test('should render the messages', () => {
      const { getByText } = render(
        <MessageStream messages={createMessages([firstText, secondText])} />
      )

      expect(getByText(firstText)).toBeDefined()
      expect(getByText(secondText)).toBeDefined()
    })
  })
})