import React from 'react'
import { render, screen } from '@testing-library/react'

import { MessageStream } from '.'

const createMessage = (text) => ({ author: '', text })
const createMessages = (texts) => texts.map(createMessage)

const renderMessageStream = (props) => render(<MessageStream {...props} />)

const findMessage = (text) => screen.getByText(text)

const arrange = (messages) => {
  const scrollToNode = jest.fn()
  renderMessageStream({ messages: createMessages(messages), scrollToNode })

  return scrollToNode
}

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
      arrange([firstText, secondText])

      expect(findMessage(firstText)).toBeDefined()
      expect(findMessage(secondText)).toBeDefined()
    })

    test('invokes the scroll function on the last message', () => {
      const scrollToNode = arrange([firstText, secondText])

      expect(scrollToNode).toHaveBeenCalledTimes(1)
      expect(scrollToNode).toHaveBeenCalledWith('.message', 1, {
        behavior: 'smooth'
      })
    })
  })

  describe('Given an empty array of messages', () => {
    test('does NOT invoke the scroll function', () => {
      const scrollToNode = arrange([])

      expect(scrollToNode).toHaveBeenCalledTimes(0)
    })
  })
})
