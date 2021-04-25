import styled from 'styled-components'

import { ChatWindow } from './components'

import github from './assets/github.svg'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 64rem;
  height: 100vh;
  margin: 0 auto;
`

const Header = styled.header`
  text-align: center;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
`

const Footer = styled.footer`
  margin: 2rem;
`

export const App = () => (
  <Main>
    <Header>
      <h1>Emoji Chatbot</h1>
    </Header>
    <Section>
      <article>
        <ChatWindow />
      </article>
    </Section>
    <Footer>
      <a href='https://github.com/joelgeorgev/emoji-chatbot'>
        <img src={github} alt='Go to GitHub repository page' />
      </a>
    </Footer>
  </Main>
)
