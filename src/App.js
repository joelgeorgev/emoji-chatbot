import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import styled from 'styled-components'

import { ChatWindowContainer } from './containers'
import { rootReducer } from './reducers'
import { saga } from './sagas'
import github from './assets/github.svg'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(saga)

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 64rem;
  height: 100vh;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 4rem;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const App = () => (
  <main role='main'>
    <Section>
      <Wrapper>
        <Provider store={store}>
          <ChatWindowContainer />
        </Provider>
      </Wrapper>
      <>
        <a href='https://github.com/joelgeorgev/emoji-chatbot'>
          <img src={github} alt='GitHub' />
        </a>
      </>
    </Section>
  </main>
)
