import React from 'react'

export const MessageBox = ({ message }) => {
  const styleClass =
    message.author === 'You'
      ? {
          position: 'justify-end',
          theme: 'bg-gray white'
        }
      : {
          position: 'justify-start',
          theme: 'bg-light-gray'
        }

  return (
    <div className={`flex ${styleClass.position}`}>
      <div className={`br2 ma1 pa2 ${styleClass.theme}`}>{message.message}</div>
    </div>
  )
}
