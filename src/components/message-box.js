import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  ${(props) =>
    props.isBot &&
    `
      justify-content: flex-start;
    `}
`

const Message = styled.div`
  margin: 0.25rem;
  border-radius: 0.25rem;
  padding: 0.5rem;
  color: #fff;
  background-color: #777;
  ${(props) =>
    props.isBot &&
    `
      color: #000;
      background-color: #eee;
    `}
`

export const MessageBox = ({ message }) => {
  const { author, message: text } = message
  const isBot = author === 'Bot'

  return (
    <Wrapper isBot={isBot}>
      <Message isBot={isBot}>{text}</Message>
    </Wrapper>
  )
}
