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

const sendMessage = (inputElement, message) => {
  fireEvent.change(inputElement, { target: { value: message } })
  fireEvent.keyPress(inputElement, { key: 'Enter', keyCode: 13 })
}

describe('ComposeMessage', () => {
  describe('When the user sends a message', () => {
    test('invokes the callback function', () => {
      const { onSendMessage, inputElement } = arrange()

      sendMessage(inputElement, userMessage)

      expect(onSendMessage).toHaveBeenCalledTimes(1)
      expect(onSendMessage).toHaveBeenCalledWith(userMessage)
    })
  })

  describe('When the user sends an empty message', () => {
    test('does NOT invoke the callback function', () => {
      const { onSendMessage, inputElement } = arrange()

      sendMessage(inputElement, '')

      expect(onSendMessage).toHaveBeenCalledTimes(0)
    })
  })

  describe('When the user sends a message with extra spaces', () => {
    test('invokes the callback function with the trimmed message', () => {
      const { onSendMessage, inputElement } = arrange()

      sendMessage(inputElement, `     ${userMessage}     `)

      expect(onSendMessage).toHaveBeenCalledTimes(1)
      expect(onSendMessage).toHaveBeenCalledWith(userMessage)
    })
  })

  describe('When the user does NOT send any message', () => {
    test('does NOT invoke the callback function', () => {
      const { onSendMessage, inputElement } = arrange()

      fireEvent.change(inputElement, { target: { value: userMessage } })
      fireEvent.keyPress(inputElement, { key: 'J', code: 74, charCode: 74 })

      expect(onSendMessage).toHaveBeenCalledTimes(0)
    })
  })
})
