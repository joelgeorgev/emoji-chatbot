import React from 'react'

import { MessageStream, ComposeMessage } from '.'

export const ChatWindow = ({ messages, onSendMessage }) => (
  <div className='flex flex-column pa2 w5'>
    <MessageStream messages={messages} />
    <ComposeMessage onSendMessage={onSendMessage} />
  </div>
)
