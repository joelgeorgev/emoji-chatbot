import { useEffect } from 'react'

import { MessageBox } from '../MessageBox/MessageBox.tsx'
import { scrollToElement } from '../../utils/scrollToElement.ts'
import type { Message } from '../../types'

import './MessageStream.css'

interface Props {
  messages: Message[]
}

export const MessageStream = ({ messages }: Props) => {
  useEffect(() => {
    if (messages.length) {
      scrollToElement('[data-scroll-target]', messages.length - 1, {
        behavior: 'smooth'
      })
    }
  })

  return (
    <div className='message-stream'>
      {messages.map((message, index) => (
        <MessageBox key={index} message={message} />
      ))}
    </div>
  )
}
