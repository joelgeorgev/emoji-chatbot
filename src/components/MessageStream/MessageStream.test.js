import React from 'react'
import { render } from '@testing-library/react'

import { MessageStream } from '.'

const renderMessageStream = (props) => render(<MessageStream {...props} />)

const createMessage = (text) => ({ author: '', text })
const createMessages = (texts) => texts.map(createMessage)

describe('MessageStream', () => {
  beforeEach(() => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  describe('Given an array of messages', () => {
    const [firstText, secondText] = ['Hello', 'World']

    test('renders the messages', () => {
      const { getByText } = renderMessageStream({
        messages: createMessages([firstText, secondText])
      })

      expect(getByText(firstText)).toBeDefined()
      expect(getByText(secondText)).toBeDefined()
    })

    test('invokes the scroll function on the last message', () => {
      const scrollToNode = jest.fn()
      renderMessageStream({
        messages: createMessages([firstText, secondText]),
        scrollToNode
      })

      expect(scrollToNode).toHaveBeenCalledTimes(1)
      expect(scrollToNode).toHaveBeenCalledWith('.message', 1, {
        behavior: 'smooth'
      })
    })
  })

  describe('Given an empty array of messages', () => {
    test('does NOT invoke the scroll function', () => {
      const scrollToNode = jest.fn()
      renderMessageStream({
        messages: [],
        scrollToNode
      })

      expect(scrollToNode).toHaveBeenCalledTimes(0)
    })
  })
})
