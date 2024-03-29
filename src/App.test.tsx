import { render, screen } from '@testing-library/react'

import { App } from './App'

jest.mock('./components')

const renderApp = () => render(<App />)

describe('App', () => {
  test('renders a heading', () => {
    renderApp()

    expect(screen.getByRole('heading', { name: 'Emoji Chatbot' })).toBeDefined()
  })

  test('renders a link to the repository', () => {
    renderApp()

    const link: HTMLAnchorElement = screen.getByRole('link', {
      name: 'Go to GitHub repository page'
    })

    expect(link).toBeDefined()
    expect(link.href).toEqual('https://github.com/joelgeorgev/emoji-chatbot')
  })
})
