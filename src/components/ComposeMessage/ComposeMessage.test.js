import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { ComposeMessage } from '.'

const renderComposeMessage = (props) => render(<ComposeMessage {...props} />)

const userMessage = 'Hello World'

const arrange = () => {
  const onSendMessage = jest.fn()
  const { getByPlaceholderText } = renderComposeMessage({
    onSendMessage
  })
  const inputElement = getByPlaceholderText('Write a message')

  return { onSendMessage, inputElement }
}

const simulateMessageSubmission = (inputElement, message) => {
  fireEvent.change(inputElement, { target: { value: message } })
  fireEvent.keyPress(inputElement, { key: 'Enter', keyCode: 13 })
}

describe('ComposeMessage', () => {
  describe('When the user submits a message', () => {
    test('invokes the callback function', () => {
      const { onSendMessage, inputElement } = arrange()

      simulateMessageSubmission(inputElement, userMessage)

      expect(onSendMessage).toHaveBeenCalledTimes(1)
      expect(onSendMessage).toHaveBeenCalledWith(userMessage)
    })
  })

  describe('When the user submits an empty message', () => {
    test('does NOT invoke the callback function', () => {
      const { onSendMessage, inputElement } = arrange()

      simulateMessageSubmission(inputElement, '')

      expect(onSendMessage).toHaveBeenCalledTimes(0)
    })
  })

  describe('When the user submits a message with extra spaces', () => {
    test('invokes the callback function with the trimmed message', () => {
      const { onSendMessage, inputElement } = arrange()

      simulateMessageSubmission(inputElement, `     ${userMessage}     `)

      expect(onSendMessage).toHaveBeenCalledTimes(1)
      expect(onSendMessage).toHaveBeenCalledWith(userMessage)
    })
  })

  describe('When the user does NOT submit the message', () => {
    test('does NOT invoke the callback function', () => {
      const { onSendMessage, inputElement } = arrange()

      fireEvent.change(inputElement, { target: { value: userMessage } })

      expect(onSendMessage).toHaveBeenCalledTimes(0)
    })
  })
})
