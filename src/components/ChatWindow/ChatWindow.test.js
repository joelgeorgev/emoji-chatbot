import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { ChatWindow } from '.'

describe('ChatWindow', () => {
  const getDefaultProps = () => ({ messages: [], onSendMessage: jest.fn() })
  const createProps = (props) => ({ ...getDefaultProps(), ...props })

  describe('When given an array of messages', () => {
    test('renders the messages', () => {
      const text = 'Hello World'
      const { getByText } = render(
        <ChatWindow {...createProps({ messages: [{ text }] })} />
      )

      expect(getByText(text)).toBeDefined()
    })
  })

  describe('When given a callback function', () => {
    describe('When user enters a message', () => {
      test('invokes callback function', () => {
        const onSendMessage = jest.fn()
        const userMessage = 'Hello World'
        const { getByPlaceholderText } = render(
          <ChatWindow {...createProps({ onSendMessage })} />
        )
        const inputElement = getByPlaceholderText('Write a message')

        fireEvent.change(inputElement, { target: { value: userMessage } })
        fireEvent.keyPress(inputElement, { key: 'Enter', keyCode: 13 })

        expect(onSendMessage).toHaveBeenCalledTimes(1)
        expect(onSendMessage).toHaveBeenCalledWith(userMessage)
      })
    })
  })
})
