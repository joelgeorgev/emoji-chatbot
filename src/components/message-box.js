import React from 'react'

export class MessageBox extends React.PureComponent {
  render() {
    const { message } = this.props
    const styleClass = message.author === 'You' ?
      {
        position: 'justify-end',
        theme: 'bg-gray white'
      }
      :
      {
        position: 'justify-start',
        theme: 'bg-light-gray'
      }
    return (
      <div className={`flex ${styleClass.position}`}>
        <div className={`br2 ma1 pa2 ${styleClass.theme}`}>{message.message}</div>
      </div>
    )
  }
}