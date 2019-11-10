import React from 'react'
import { render } from '@testing-library/react'

import { MessageStream } from '.'

const createMessage = (text) => ({ author: '', text })
const createMessages = (texts) => texts.map(createMessage)

describe('MessageStream', () => {
  describe('When given an array of messages', () => {
    test('renders the messages', () => {
      const [firstText, secondText] = ['Hello', 'Hi']
      const { getByText } = render(
        <MessageStream messages={createMessages([firstText, secondText])} />
      )

      expect(getByText(firstText)).toBeDefined()
      expect(getByText(secondText)).toBeDefined()
    })
  })
})
