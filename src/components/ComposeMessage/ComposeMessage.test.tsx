import type { ComponentProps } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { ComposeMessage } from '.'

type Props = ComponentProps<typeof ComposeMessage>
type HandleSendMessage = Props['handleSendMessage']
type MockHandleSendMessage = jest.MockedFunction<HandleSendMessage>

const userMessage = 'Hello'

const renderComposeMessage = (props: Props) =>
  render(<ComposeMessage {...props} />)

const findTextField = (): HTMLInputElement =>
  screen.getByRole('textbox', { name: 'Write a message' }) as HTMLInputElement

const arrange = (): MockHandleSendMessage => {
  const handleSendMessage: MockHandleSendMessage = jest.fn()
  renderComposeMessage({ handleSendMessage })

  return handleSendMessage
}

const sendMessage = (message: string): void => {
  const textField = findTextField()

  fireEvent.change(textField, { target: { value: message } })
  fireEvent.submit(textField)
}

describe('ComposeMessage', () => {
  test('renders a text field', () => {
    arrange()

    const textField = findTextField()

    expect(textField).toBeDefined()
    expect(textField.placeholder).toEqual('Write a message')
  })

  describe('When the user sends a message', () => {
    test('invokes the callback function', () => {
      const handleSendMessage = arrange()

      sendMessage(userMessage)

      expect(handleSendMessage).toHaveBeenCalledTimes(1)
      expect(handleSendMessage).toHaveBeenCalledWith(userMessage)
    })

    test('clears the input element', () => {
      arrange()

      sendMessage(userMessage)

      expect(findTextField().value).toEqual('')
    })
  })

  describe('When the user sends a message with extra spaces', () => {
    test('invokes the callback function with the trimmed message', () => {
      const handleSendMessage = arrange()

      sendMessage(`     ${userMessage}     `)

      expect(handleSendMessage).toHaveBeenCalledTimes(1)
      expect(handleSendMessage).toHaveBeenCalledWith(userMessage)
    })
  })

  describe('When the user sends an empty message', () => {
    test('does NOT invoke the callback function', () => {
      const handleSendMessage = arrange()

      sendMessage('')

      expect(handleSendMessage).toHaveBeenCalledTimes(0)
    })
  })
})
