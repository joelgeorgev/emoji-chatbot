import type { ComponentProps } from 'react'
import { render, screen } from '@testing-library/react'

import { MessageStream } from '.'
import type { scrollToElement } from '../../utils'

type Props = ComponentProps<typeof MessageStream>
type Message = Props['messages'][number]
type ScrollToNode = typeof scrollToElement
type MockScrollToNode = jest.MockedFunction<ScrollToNode>

const createMessage = (text: string): Message => ({ author: 'You', text })
const createMessages = (texts: string[]): Message[] => texts.map(createMessage)

const renderMessageStream = (props: Props) =>
  render(<MessageStream {...props} />)

const findMessage = (text: string): HTMLDivElement => screen.getByText(text)

const arrange = (messages: string[]): MockScrollToNode => {
  const scrollToNode: MockScrollToNode = jest.fn()
  renderMessageStream({ messages: createMessages(messages), scrollToNode })

  return scrollToNode
}

describe('MessageStream', () => {
  describe('Given an array of messages', () => {
    const [firstText, secondText] = ['Hello', 'World']

    test('renders the messages', () => {
      arrange([firstText, secondText])

      expect(findMessage(firstText)).toBeDefined()
      expect(findMessage(secondText)).toBeDefined()
    })

    test('invokes the scroll function on the last message', () => {
      const scrollToNode = arrange([firstText, secondText])

      expect(scrollToNode).toHaveBeenCalledTimes(1)
      expect(scrollToNode).toHaveBeenCalledWith('.message', 1, {
        behavior: 'smooth'
      })
    })
  })

  describe('Given an empty array of messages', () => {
    test('does NOT invoke the scroll function', () => {
      const scrollToNode = arrange([])

      expect(scrollToNode).toHaveBeenCalledTimes(0)
    })
  })
})
