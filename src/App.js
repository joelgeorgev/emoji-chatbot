import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import styled from 'styled-components'

import { ChatWindow } from './components'
import { reducer } from './reducers'
import { rootSaga } from './sagas'
import github from './assets/github.svg'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 64rem;
  height: 100vh;
  margin: 0 auto;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 2rem;
  overflow: auto;
`

const Footer = styled.footer`
  margin: 2rem;
`

export const App = () => (
  <Main>
    <Section>
      <article>
        <Provider store={store}>
          <ChatWindow />
        </Provider>
      </article>
    </Section>
    <Footer>
      <a href='https://github.com/joelgeorgev/emoji-chatbot'>
        <img src={github} alt='Go to GitHub repository page' />
      </a>
    </Footer>
  </Main>
)
