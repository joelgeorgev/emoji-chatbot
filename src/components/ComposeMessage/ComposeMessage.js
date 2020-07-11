import React, { useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
  margin-top: 2rem;
`

const Input = styled.input`
  border: 1px solid #aaa;
  padding: 0.5rem;
`

export const ComposeMessage = ({ handleSendMessage }) => {
  const [message, setMessage] = useState('')

  const handleChange = (event) => setMessage(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()

    const composedMessage = message.trim()
    if (composedMessage) {
      handleSendMessage(composedMessage)
      setMessage('')
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type='text'
        placeholder='Write a message'
        aria-label='Write a message'
        value={message}
        onChange={handleChange}
      />
    </Form>
  )
}
