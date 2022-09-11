import { useEffect } from 'react'
import styled from 'styled-components'

import { MessageBox } from '..'
import { scrollToElement } from '../../utils'
import type { Message } from '../../types'

interface Props {
  messages: Message[]
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

export const MessageStream = ({ messages }: Props) => {
  useEffect(() => {
    if (messages.length) {
      scrollToElement('[data-scroll-target]', messages.length - 1, {
        behavior: 'smooth'
      })
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
