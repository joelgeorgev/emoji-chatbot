import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import 'tachyons/css/tachyons.min.css'

import { ChatWindowContainer } from './containers'
import { rootReducer } from './reducers'
import { saga } from './sagas'
import github from './assets/github.svg'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(saga)

export const App = () => (
  <main role='main'>
    <section className='flex flex-column w-80 mw8 vh-100 center pt4 pb5'>
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
    </section>
  </main>
)
