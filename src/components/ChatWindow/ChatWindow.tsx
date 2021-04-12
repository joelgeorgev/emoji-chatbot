import styled from 'styled-components'

import { MessageStream, ComposeMessage } from '..'
import { useMessages } from '../../hooks'

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
