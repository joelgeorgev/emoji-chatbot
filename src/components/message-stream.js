import React from 'react';

export class MessageStream extends React.PureComponent {
  render() {
    const { messages } = this.props;
    return (
      <div className='ba br2 pa2 overflow-auto'>
        <div className='flex flex-column ma2 h24'>
          {messages.map((message, index) => {
            return <div key={index} className='ma1'>
              <span className='b'>{message.author}</span> : <span>{message.message}</span>
            </div>
          })}
        </div>
      </div>
    );
  }
}