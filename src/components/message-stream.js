import React from 'react'

import { MessageBox } from '.'

export class MessageStream extends React.PureComponent {

  ref

  setRef = (el) => {
    this.ref = el
  }

  componentDidUpdate() {
    const ref = this.ref
    const { scrollHeight, clientHeight } = ref
    const maxScrollTop = scrollHeight - clientHeight
    ref.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0
  }

  render() {
    const { messages } = this.props
    return (
      <div className='ba br2 pa2 overflow-auto' ref={this.setRef}>
        <div className='flex flex-column ma2 min-h24'>
          {messages.map((message, index) => {
            return <MessageBox key={index} message={message} />
          })}
        </div>
      </div>
    )
  }
}