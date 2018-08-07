import React from 'react';

import { MessageStream, ComposeMessage } from '.';

export class ChatWindow extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
  }

  onSendMessage = (message) => {
    this.setState({
      messages: this.state.messages.concat({ author: 'You', message }, { author: 'Bot', message })
    });
  }

  render() {
    return (
      <div className='flex flex-column pa2 w5'>
        <MessageStream messages={this.state.messages} />
        <ComposeMessage onSendMessage={this.onSendMessage} />
      </div>
    );
  }
}