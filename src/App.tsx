import { ChatWindow } from './components/ChatWindow/ChatWindow.tsx'

import './App.css'

import github from './assets/github.svg'

export const App = () => (
  <main className='main'>
    <header className='header'>
      <h1>Emoji Chatbot</h1>
    </header>
    <section className='section'>
      <article>
        <ChatWindow />
      </article>
    </section>
    <footer className='footer'>
      <a href='https://github.com/joelgeorgev/emoji-chatbot'>
        <img src={github} alt='Go to GitHub repository page' />
      </a>
    </footer>
  </main>
)
