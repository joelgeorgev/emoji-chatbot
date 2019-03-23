import React, { useEffect, useRef } from 'react'

import { MessageBox } from '.'

export const MessageStream = ({ messages }) => {
  const ref = useRef(null)

  useEffect(() => {
    const { current: element } = ref
    const { scrollHeight, clientHeight } = element
    const maxScrollTop = scrollHeight - clientHeight
    element.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0
  })

  return (
    <div className='ba br2 pa2 overflow-auto' ref={ref}>
      <div className='flex flex-column ma2 min-h24'>
        {messages.map((message, index) => {
          return <MessageBox key={index} message={message} />
        })}
      </div>
    </div>
  )
}