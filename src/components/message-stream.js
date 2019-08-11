import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

import { MessageBox } from '.'

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

export const MessageStream = ({ messages }) => {
  const ref = useRef(null)

  useEffect(() => {
    const { current: element } = ref
    const { scrollHeight, clientHeight } = element
    const maxScrollTop = scrollHeight - clientHeight
    element.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0
  })

  return (
    <Wrapper ref={ref}>
      {messages.map((message, index) => (
        <MessageBox key={index} message={message} />
      ))}
    </Wrapper>
  )
}
