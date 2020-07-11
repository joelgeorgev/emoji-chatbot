import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { ComposeMessage } from '.'

const renderComposeMessage = (props) => render(<ComposeMessage {...props} />)

const userMessage = 'Hello'

const arrange = () => {
  const onSendMessage = jest.fn()
  const { getByPlaceholderText } = renderComposeMessage({ onSendMessage })
  const inputElement = getByPlaceholderText('Write a message')

  return { inputElement, onSendMessage }
}

const sendMessage = (inputElement, message) => {
  fireEvent.change(inputElement, { target: { value: message } })
  fireEvent.submit(inputElement)
}

describe('ComposeMessage', () => {
  describe('When the user sends a message', () => {
    test('invokes the callback function', () => {
      const { inputElement, onSendMessage } = arrange()

      sendMessage(inputElement, userMessage)

      expect(onSendMessage).toHaveBeenCalledTimes(1)
      expect(onSendMessage).toHaveBeenCalledWith(userMessage)
    })

    test('clears the input element', () => {
      const { inputElement } = arrange()

      sendMessage(inputElement, userMessage)

      expect(inputElement.value).toEqual('')
    })
  })

  describe('When the user sends a message with extra spaces', () => {
    test('invokes the callback function with the trimmed message', () => {
      const { inputElement, onSendMessage } = arrange()

      sendMessage(inputElement, `     ${userMessage}     `)

      expect(onSendMessage).toHaveBeenCalledTimes(1)
      expect(onSendMessage).toHaveBeenCalledWith(userMessage)
    })
  })

  describe('When the user sends an empty message', () => {
    test('does NOT invoke the callback function', () => {
      const { inputElement, onSendMessage } = arrange()

      sendMessage(inputElement, '')

      expect(onSendMessage).toHaveBeenCalledTimes(0)
    })
  })
})
