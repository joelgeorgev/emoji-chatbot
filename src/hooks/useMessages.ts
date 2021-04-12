import { useState } from 'react'

import { translate } from '../moji-translate'
import { Message } from '../types'

const defaultWelcomeMessages: Message[] = [
  {
    author: 'Bot',
    text: 'Write a message and see it translated to emojis!'
  }
]

export const useMessages = (
  welcomeMessages: Message[] = defaultWelcomeMessages
) => {
  const [messages, setMessages] = useState<Message[]>(welcomeMessages)

  const sendMessage = (message: string): void => {
    setMessages((prevMessages) =>
      prevMessages.concat(
        { author: 'You', text: message },
        { author: 'Bot', text: translate(message, false) }
      )
    )
  }

  return {
    messages,
    sendMessage
  }
}
