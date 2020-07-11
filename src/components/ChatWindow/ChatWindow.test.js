import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { ChatWindow } from '.'

const createDefaultProps = () => ({
  messages: [],
  handleSendMessage: () => {}
})

const renderChatWindow = (props) =>
  render(<ChatWindow {...createDefaultProps()} {...props} />)

const userMessage = 'Hello'

describe('ChatWindow', () => {
  beforeEach(() => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn()
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  test('renders an array of messages', () => {
    const [firstText, secondText] = ['Hello', 'World']
    const { getByText } = renderChatWindow({
      messages: [{ text: firstText }, { text: secondText }]
    })

    expect(getByText(firstText)).toBeDefined()
    expect(getByText(secondText)).toBeDefined()
  })

  describe('When the user sends a message', () => {
    test('invokes the callback function', () => {
      const handleSendMessage = jest.fn()
      const { getByPlaceholderText } = renderChatWindow({ handleSendMessage })
      const inputElement = getByPlaceholderText('Write a message')

      fireEvent.change(inputElement, { target: { value: userMessage } })
      fireEvent.submit(inputElement)

      expect(handleSendMessage).toHaveBeenCalledTimes(1)
      expect(handleSendMessage).toHaveBeenCalledWith(userMessage)
    })
  })
})
