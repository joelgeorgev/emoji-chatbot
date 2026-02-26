import { MockedFunction } from 'vitest'
import { render } from '@testing-library/react'

import { ChatWindow } from './ChatWindow.tsx'
import { MessageStream } from '../MessageStream/MessageStream.tsx'
import { ComposeMessage } from '../ComposeMessage/ComposeMessage.tsx'
import { useMessages } from '../../hooks/useMessages.ts'
import type { BotMessage } from '../../types'

vi.mock('../MessageStream/MessageStream.tsx')
vi.mock('../ComposeMessage/ComposeMessage.tsx')
vi.mock('../../hooks/useMessages.ts')

const mockMessageStream = MessageStream as MockedFunction<typeof MessageStream>
const mockComposeMessage = ComposeMessage as MockedFunction<
  typeof ComposeMessage
>
const mockUseMessages = useMessages as MockedFunction<typeof useMessages>

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
