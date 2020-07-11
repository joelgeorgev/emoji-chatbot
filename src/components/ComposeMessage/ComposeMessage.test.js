import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { ComposeMessage } from '.'

const renderComposeMessage = (props) => render(<ComposeMessage {...props} />)

const userMessage = 'Hello'

const arrange = () => {
  const handleSendMessage = jest.fn()
  const { getByPlaceholderText } = renderComposeMessage({ handleSendMessage })
  const inputElement = getByPlaceholderText('Write a message')

  return { inputElement, handleSendMessage }
}

const sendMessage = (inputElement, message) => {
  fireEvent.change(inputElement, { target: { value: message } })
  fireEvent.submit(inputElement)
}

describe('ComposeMessage', () => {
  describe('When the user sends a message', () => {
    test('invokes the callback function', () => {
      const { inputElement, handleSendMessage } = arrange()

      sendMessage(inputElement, userMessage)

      expect(handleSendMessage).toHaveBeenCalledTimes(1)
      expect(handleSendMessage).toHaveBeenCalledWith(userMessage)
    })

    test('clears the input element', () => {
      const { inputElement } = arrange()

      sendMessage(inputElement, userMessage)

      expect(inputElement.value).toEqual('')
    })
  })

  describe('When the user sends a message with extra spaces', () => {
    test('invokes the callback function with the trimmed message', () => {
      const { inputElement, handleSendMessage } = arrange()

      sendMessage(inputElement, `     ${userMessage}     `)

      expect(handleSendMessage).toHaveBeenCalledTimes(1)
      expect(handleSendMessage).toHaveBeenCalledWith(userMessage)
    })
  })

  describe('When the user sends an empty message', () => {
    test('does NOT invoke the callback function', () => {
      const { inputElement, handleSendMessage } = arrange()

      sendMessage(inputElement, '')

      expect(handleSendMessage).toHaveBeenCalledTimes(0)
    })
  })
})
