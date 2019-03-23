import React, { useState } from 'react'

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
    <div className='self-center ma4'>
      <input
        type='text'
        placeholder='Write a message'
        value={message}
        className='ba b--light-silver pa2'
        onChange={handleChange}
        onKeyPress={handleKeyPress} />
    </div>
  )
}