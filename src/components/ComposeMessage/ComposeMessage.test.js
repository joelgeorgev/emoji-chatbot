import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { ComposeMessage } from '.'

describe('ComposeMessage', () => {
  describe('When user types a message and presses enter key', () => {
    test('should invoke callback function', () => {
      const onSendMessage = jest.fn()
      const userMessage = 'Hello World'
      const { getByPlaceholderText } = render(
        <ComposeMessage onSendMessage={onSendMessage} />
      )
      const inputElement = getByPlaceholderText('Write a message')

      fireEvent.change(inputElement, { target: { value: userMessage } })
      fireEvent.keyPress(inputElement, { key: 'Enter', keyCode: 13 })

      expect(onSendMessage).toHaveBeenCalledTimes(1)
      expect(onSendMessage).toHaveBeenCalledWith(userMessage)
    })
  })
})
