import React from 'react';
import 'tachyons/css/tachyons.min.css';

import { ChatWindow } from './components';
import github from './assets/github.svg';

export class App extends React.PureComponent {
  render() {
    return (
      <div className='flex flex-column w-80 mw8 vh-100 center pv4'>
        <div className='flex flex-auto flex-column self-center'>
          <ChatWindow />
        </div>
        <div className='self-center'>
          <a href='https://github.com/joelgeorgev/emoji-chatbot'>
            <img src={github} alt='GitHub' />
          </a>
        </div>
      </div>
    );
  }
}