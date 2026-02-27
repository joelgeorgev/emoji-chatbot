import type { Message } from '../../types'

import './MessageBox.css'

interface Props {
  message: Message
}

export const MessageBox = ({ message }: Props) => {
  const { author, text } = message
  const isBot = author === 'Bot'

  return (
    <div className={`message-box ${isBot && 'message-box--is-bot'}`}>
      <div
        className={`message ${isBot && 'message--is-bot'}`}
        data-scroll-target
      >
        {text}
      </div>
    </div>
  )
}
