import { MessageStream } from '../MessageStream/MessageStream.tsx'
import { ComposeMessage } from '../ComposeMessage/ComposeMessage.tsx'
import { useMessages } from '../../hooks/useMessages.ts'

import './ChatWindow.css'

export const ChatWindow = () => {
  const { messages, sendMessage } = useMessages()

  return (
    <div className='chat-window'>
      <MessageStream messages={messages} />
      <ComposeMessage handleSendMessage={sendMessage} />
    </div>
  )
}
