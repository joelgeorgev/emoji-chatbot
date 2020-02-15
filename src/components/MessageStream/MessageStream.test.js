import React from 'react'
import { render } from '@testing-library/react'

import { MessageStream } from '.'

const renderMessageStream = (props) => render(<MessageStream {...props} />)

const createMessage = (text) => ({ author: '', text })
const createMessages = (texts) => texts.map(createMessage)

describe('MessageStream', () => {
  test('renders an array of messages', () => {
    const [firstText, secondText] = ['Hello', 'World']
    const { getByText } = renderMessageStream({
      messages: createMessages([firstText, secondText])
    })

    expect(getByText(firstText)).toBeDefined()
    expect(getByText(secondText)).toBeDefined()
  })
})
