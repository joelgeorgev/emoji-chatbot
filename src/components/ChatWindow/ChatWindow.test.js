import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { ChatWindow } from '.'

const createDefaultProps = () => ({
  messages: [],
  onSendMessage: () => {}
})

const renderChatWindow = (props) =>
  render(<ChatWindow {...createDefaultProps()} {...props} />)

describe('ChatWindow', () => {
  test('renders an array of messages', () => {
    const [firstText, secondText] = ['Hello', 'World']
    const { getByText } = renderChatWindow({
      messages: [{ text: firstText }, { text: secondText }]
    })

    expect(getByText(firstText)).toBeDefined()
    expect(getByText(secondText)).toBeDefined()
  })

  describe('When the user submits a message', () => {
    test('invokes the callback function', () => {
      const onSendMessage = jest.fn()
      const userMessage = 'Hello World'
      const { getByPlaceholderText } = renderChatWindow({
        onSendMessage
      })
      const inputElement = getByPlaceholderText('Write a message')

      fireEvent.change(inputElement, { target: { value: userMessage } })
      fireEvent.keyPress(inputElement, { key: 'Enter', keyCode: 13 })

      expect(onSendMessage).toHaveBeenCalledTimes(1)
      expect(onSendMessage).toHaveBeenCalledWith(userMessage)
    })
  })
})
