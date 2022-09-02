import type { ComponentProps } from 'react'
import { render, screen } from '@testing-library/react'

import { MessageStream } from '.'
import { scrollToElement } from '../../utils'

jest.mock('../../utils')

const mockScrollToElement = scrollToElement as jest.MockedFunction<
  typeof scrollToElement
>

type Props = ComponentProps<typeof MessageStream>
type Message = Props['messages'][number]

const createMessages = (texts: string[]): Message[] =>
  texts.map((text) => ({ author: 'You', text }))

const renderMessageStream = (props: Props) =>
  render(<MessageStream {...props} />)

const findMessage = (text: string): HTMLDivElement => screen.getByText(text)

describe('MessageStream', () => {
  describe('Given an array of messages', () => {
    const [firstText, secondText] = ['Hello', 'World']

    test('renders the messages', () => {
      renderMessageStream({ messages: createMessages([firstText, secondText]) })

      expect(findMessage(firstText)).toBeDefined()
      expect(findMessage(secondText)).toBeDefined()
    })

    test('invokes the scroll function on the last message', () => {
      renderMessageStream({ messages: createMessages([firstText, secondText]) })

      expect(mockScrollToElement).toHaveBeenCalledTimes(1)
      expect(mockScrollToElement).toHaveBeenCalledWith('.message', 1, {
        behavior: 'smooth'
      })
    })
  })

  describe('Given an empty array of messages', () => {
    test('does NOT invoke the scroll function', () => {
      renderMessageStream({ messages: [] })

      expect(mockScrollToElement).toHaveBeenCalledTimes(0)
    })
  })
})
