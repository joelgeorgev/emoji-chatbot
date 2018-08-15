import React from 'react'

import { MessageBox } from '.'

export class MessageStream extends React.PureComponent {
  render() {
    const { messages } = this.props
    return (
      <div className='ba br2 pa2 overflow-auto'>
        <div className='flex flex-column ma2 h24'>
          {messages.map((message, index) => {
            return <MessageBox key={index} message={message} />
          })}
        </div>
      </div>
    )
  }
}