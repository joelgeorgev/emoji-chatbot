import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'tachyons/css/tachyons.min.css';

import { ChatWindowContainer } from './containers';
import { rootReducer } from './reducers';
import github from './assets/github.svg';

const store = createStore(rootReducer);

export class App extends React.PureComponent {
  render() {
    return (
      <div className='flex flex-column w-80 mw8 vh-100 center pv4'>
        <div className='flex flex-auto flex-column self-center'>
          <Provider store={store}>
            <ChatWindowContainer />
          </Provider>
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