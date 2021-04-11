import { useEffect } from 'react'
import styled from 'styled-components'

import { MessageBox } from '..'
import { scrollToElement } from '../../utils'
import { Message } from '../../types'

interface Props {
  messages: Message[]
  scrollToNode?: typeof scrollToElement
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 20rem;
  height: 20rem;
  border: 1px solid;
  border-radius: 0.25rem;
  padding: 1rem;
  overflow: auto;
`

export const MessageStream = ({
  messages,
  scrollToNode = scrollToElement
}: Props) => {
  useEffect(() => {
    if (messages.length) {
      scrollToNode('.message', messages.length - 1, { behavior: 'smooth' })
    }
  })

  return (
    <Wrapper>
      {messages.map((message, index) => (
        <MessageBox key={index} message={message} />
      ))}
    </Wrapper>
  )
}
