import { render } from '@testing-library/react'

import { ChatWindow } from '.'
import { MessageStream, ComposeMessage } from '..'
import { useMessages } from '../../hooks'
import type { BotMessage } from '../../types'

jest.mock('..')
jest.mock('../../hooks')

const mockMessageStream = MessageStream as jest.MockedFunction<
  typeof MessageStream
>
const mockComposeMessage = ComposeMessage as jest.MockedFunction<
  typeof ComposeMessage
>
const mockUseMessages = useMessages as jest.MockedFunction<typeof useMessages>

type UseMessagesResult = ReturnType<typeof useMessages>

const createMockUseMessagesResult = (
  overrides: Partial<UseMessagesResult>
): UseMessagesResult => ({
  messages: [],
  sendMessage: () => {},
  ...overrides
})

describe('ChatWindow', () => {
  test('renders MessageStream', () => {
    const welcomeMessage: BotMessage = {
      author: 'Bot',
      text: 'Beep'
    }
    mockUseMessages.mockReturnValue(
      createMockUseMessagesResult({ messages: [welcomeMessage] })
    )

    render(<ChatWindow />)

    expect(mockUseMessages).toHaveBeenCalledTimes(1)
    expect(mockUseMessages).toHaveBeenCalledWith()

    expect(mockMessageStream).toHaveBeenCalledTimes(1)

    const messageStreamProps = mockMessageStream.mock.calls[0][0]

    expect(messageStreamProps).toEqual({
      messages: [welcomeMessage]
    })
  })

  test('renders ComposeMessage', () => {
    const sendMessage = () => {}
    mockUseMessages.mockReturnValue(
      createMockUseMessagesResult({ sendMessage })
    )

    render(<ChatWindow />)

    expect(mockUseMessages).toHaveBeenCalledTimes(1)
    expect(mockUseMessages).toHaveBeenCalledWith()

    expect(mockComposeMessage).toHaveBeenCalledTimes(1)

    const composeMessageProps = mockComposeMessage.mock.calls[0][0]

    expect(composeMessageProps).toEqual({
      handleSendMessage: sendMessage
    })
  })
})
