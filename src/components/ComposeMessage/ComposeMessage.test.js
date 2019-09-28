import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { ComposeMessage } from '.'

describe('ComposeMessage', () => {
  const userMessage = 'Hello World'

  const arrange = () => {
    const onSendMessage = jest.fn()
    const { getByPlaceholderText } = render(
      <ComposeMessage onSendMessage={onSendMessage} />
    )
    const inputElement = getByPlaceholderText('Write a message')

    return { onSendMessage, inputElement }
  }

  const simulateMessageSubmitByUser = ({
    inputElement,
    message = userMessage,
    shouldPressEnterKey = true
  }) => {
    fireEvent.change(inputElement, { target: { value: message } })

    if (shouldPressEnterKey) {
      fireEvent.keyPress(inputElement, { key: 'Enter', keyCode: 13 })
    } else {
      fireEvent.keyPress(inputElement, { key: 'J', code: 74, charCode: 74 })
    }
  }

  describe('When user types a message and presses enter key', () => {
    test('should invoke callback function', () => {
      const { onSendMessage, inputElement } = arrange()

      simulateMessageSubmitByUser({ inputElement })

      expect(onSendMessage).toHaveBeenCalledTimes(1)
      expect(onSendMessage).toHaveBeenCalledWith(userMessage)
    })
  })

  describe('When user types an empty message and presses enter key', () => {
    test('should NOT invoke callback function', () => {
      const { onSendMessage, inputElement } = arrange()

      simulateMessageSubmitByUser({ inputElement, message: '' })

      expect(onSendMessage).toHaveBeenCalledTimes(0)
    })
  })

  describe('When user types a message with extra spaces and presses enter key', () => {
    test('should invoke callback function with the trimmed message', () => {
      const { onSendMessage, inputElement } = arrange()

      simulateMessageSubmitByUser({
        inputElement,
        message: `     ${userMessage}     `
      })

      expect(onSendMessage).toHaveBeenCalledTimes(1)
      expect(onSendMessage).toHaveBeenCalledWith(userMessage)
    })
  })

  describe('When user types a message and presses any other key', () => {
    test('should NOT invoke callback function', () => {
      const { onSendMessage, inputElement } = arrange()

      simulateMessageSubmitByUser({
        inputElement,
        shouldPressEnterKey: false
      })

      expect(onSendMessage).toHaveBeenCalledTimes(0)
    })
  })
})
