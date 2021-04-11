import { render, screen, fireEvent } from '@testing-library/react'

import { ComposeMessage } from '.'

interface Props {
  handleSendMessage(message: string): void
}

const userMessage = 'Hello'

const renderComposeMessage = (props: Props) =>
  render(<ComposeMessage {...props} />)

const findInputElement = (): HTMLInputElement =>
  screen.getByRole('textbox', { name: 'Write a message' }) as HTMLInputElement

const arrange = (): jest.MockedFunction<Props['handleSendMessage']> => {
  const handleSendMessage = jest.fn()
  renderComposeMessage({ handleSendMessage })

  return handleSendMessage
}

const sendMessage = (message: string): void => {
  const inputElement = findInputElement()

  fireEvent.change(inputElement, { target: { value: message } })
  fireEvent.submit(inputElement)
}

describe('ComposeMessage', () => {
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

      expect(findInputElement().value).toEqual('')
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
