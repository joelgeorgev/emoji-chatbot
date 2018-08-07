import React from 'react';

import { MessageStream, ComposeMessage } from '.';

export class ChatWindow extends React.PureComponent {
  render() {
    return (
      <div className='flex flex-column pa2 w5'>
        <MessageStream />
        <ComposeMessage />
      </div>
    );
  }
}