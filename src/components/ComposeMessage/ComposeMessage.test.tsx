import { MockedFunction } from 'vitest'
import type { ComponentProps } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ComposeMessage } from './ComposeMessage.tsx'

type Props = ComponentProps<typeof ComposeMessage>
type HandleSendMessage = Props['handleSendMessage']
type MockHandleSendMessage = MockedFunction<HandleSendMessage>

const userMessage = 'Hello'

const renderComposeMessage = (props: Props) =>
  render(<ComposeMessage {...props} />)

const findTextField = (): HTMLInputElement =>
  screen.getByRole('textbox', { name: 'Write a message' })

const arrange = (): MockHandleSendMessage => {
  const handleSendMessage: MockHandleSendMessage = vi.fn()
  renderComposeMessage({ handleSendMessage })

  return handleSendMessage
}

const sendMessage = async (message: string) => {
  const user = userEvent.setup()
  const textField = findTextField()

  await user.type(textField, message)

  return user.keyboard('{enter}')
}

describe('ComposeMessage', () => {
  test('renders a text field', () => {
    arrange()

    const textField = findTextField()

    expect(textField).toBeDefined()
    expect(textField.placeholder).toEqual('Write a message')
  })

  describe('When the user sends a message', () => {
    test('invokes the callback function', async () => {
      const handleSendMessage = arrange()

      await sendMessage(userMessage)

      expect(handleSendMessage).toHaveBeenCalledTimes(1)
      expect(handleSendMessage).toHaveBeenCalledWith(userMessage)
    })

    test('clears the input element', async () => {
      arrange()

      await sendMessage(userMessage)

      expect(findTextField().value).toEqual('')
    })
  })

  describe('When the user sends a message with extra spaces', () => {
    test('invokes the callback function with the trimmed message', async () => {
      const handleSendMessage = arrange()

      await sendMessage(`     ${userMessage}     `)

      expect(handleSendMessage).toHaveBeenCalledTimes(1)
      expect(handleSendMessage).toHaveBeenCalledWith(userMessage)
    })
  })

  describe('When the user sends an empty message', () => {
    test('does NOT invoke the callback function', async () => {
      const handleSendMessage = arrange()

      await sendMessage(' ')

      expect(handleSendMessage).toHaveBeenCalledTimes(0)
    })
  })
})
