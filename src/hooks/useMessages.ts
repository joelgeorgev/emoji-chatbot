import { useState } from 'react'

import { translate } from '../moji-translate'
import type { Message, BotMessage, UserMessage } from '../types'

const defaultWelcomeMessages: BotMessage[] = [
  {
    author: 'Bot',
    text: 'Write a message and see it translated to emojis!'
  }
]

export const useMessages = (
  welcomeMessages: BotMessage[] = defaultWelcomeMessages
) => {
  const [messages, setMessages] = useState<Message[]>(welcomeMessages)

  const sendMessage = (message: string): void => {
    const translatedMessageTuple: [UserMessage, BotMessage] = [
      { author: 'You', text: message },
      { author: 'Bot', text: translate(message, false) }
    ]

    setMessages((prevMessages) => prevMessages.concat(translatedMessageTuple))
  }

  return {
    messages,
    sendMessage
  }
}
