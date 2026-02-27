import { useState, FormEvent } from 'react'

import './ComposeMessage.css'

interface Props {
  handleSendMessage: (message: string) => void
}

export const ComposeMessage = ({ handleSendMessage }: Props) => {
  const [message, setMessage] = useState<string>('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    const composedMessage = message.trim()

    if (composedMessage) {
      handleSendMessage(composedMessage)
      setMessage('')
    }
  }

  return (
    <form className='compose-message' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Write a message'
        aria-label='Write a message'
        value={message}
        className='input'
        onChange={(event) => setMessage(event.target.value)}
      />
    </form>
  )
}
