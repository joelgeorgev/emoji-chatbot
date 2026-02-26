import styled from 'styled-components'

import { MessageStream } from '../MessageStream/MessageStream.tsx'
import { ComposeMessage } from '../ComposeMessage/ComposeMessage.tsx'
import { useMessages } from '../../hooks/useMessages.ts'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
`

export const ChatWindow = () => {
  const { messages, sendMessage } = useMessages()

  return (
    <Wrapper>
      <MessageStream messages={messages} />
      <ComposeMessage handleSendMessage={sendMessage} />
    </Wrapper>
  )
}
