import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  ${({ isBot }) =>
    isBot &&
    `
      justify-content: flex-start;
    `}
`

const Message = styled.div`
  margin: 0.25rem;
  border-radius: 0.25rem;
  padding: 0.5rem;
  color: #fff;
  background-color: #555;
  ${({ isBot }) =>
    isBot &&
    `
      color: #000;
      background-color: #eee;
    `}
`

export const MessageBox = ({ message }) => {
  const { author, text } = message
  const isBot = author === 'Bot'

  return (
    <Wrapper isBot={isBot}>
      <Message isBot={isBot} className='message'>
        {text}
      </Message>
    </Wrapper>
  )
}
