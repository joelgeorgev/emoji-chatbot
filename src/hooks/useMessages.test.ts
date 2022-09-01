import { renderHook, act } from '@testing-library/react'

import { useMessages } from './useMessages'
import { translate } from '../moji-translate'
import type { BotMessage } from '../types'

jest.mock('../moji-translate')

const mockTranslate = translate as jest.MockedFunction<typeof translate>

describe('useMessages', () => {
  test('returns messages containing a welcome message', () => {
    const { result } = renderHook(() => useMessages())

    expect(result.current.messages).toEqual([
      {
        author: 'Bot',
        text: 'Write a message and see it translated to emojis!'
      }
    ])
  })

  describe('When a custom welcome message(s) is provided', () => {
    test('returns messages containing the custom welcome message(s)', () => {
      const welcomeMessages: BotMessage[] = [
        {
          author: 'Bot',
          text: 'Hello User!'
        }
      ]
      const { result } = renderHook(() => useMessages(welcomeMessages))

      expect(result.current.messages).toEqual(welcomeMessages)
    })
  })

  test('returns a `sendMessage` function', () => {
    const { result } = renderHook(() => useMessages())

    expect(typeof result.current.sendMessage).toEqual('function')
  })

  describe('When `sendMessage` function is invoked', () => {
    test('returns messages containing the user message and the translated message', () => {
      const translatedMessage = '🐱‍🏍'
      mockTranslate.mockReturnValue(translatedMessage)

      const userMessage = 'Hello'
      const { result } = renderHook(() => useMessages([]))

      act(() => {
        result.current.sendMessage(userMessage)
      })

      expect(mockTranslate).toHaveBeenCalledTimes(1)
      expect(mockTranslate).toHaveBeenCalledWith(userMessage, false)

      expect(result.current.messages).toEqual([
        { author: 'You', text: userMessage },
        { author: 'Bot', text: translatedMessage }
      ])
    })
  })
})
