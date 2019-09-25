import React, { useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin-top: 2rem;
`

const Input = styled.input`
  border: 1px solid #aaa;
  padding: 0.5rem;
`

export const ComposeMessage = ({ onSendMessage }) => {
  const [message, setMessage] = useState('')

  const handleChange = (e) => setMessage(e.target.value)
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const composedMessage = message.trim()
      if (composedMessage) {
        onSendMessage(composedMessage)
        setMessage('')
      }
    }
  }

  return (
    <Wrapper>
      <Input
        type='text'
        placeholder='Write a message'
        aria-label='Write a message'
        value={message}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
    </Wrapper>
  )
}
