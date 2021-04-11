import { render, screen } from '@testing-library/react'

import { MessageBox } from '.'
import { Message } from '../../types'

const createMessage = (text: string): Message => ({ author: 'You', text })

const renderMessageBox = (text: string) =>
  render(<MessageBox message={createMessage(text)} />)

const findMessage = (text: string) => screen.getByText(text)

describe('MessageBox', () => {
  test('renders a message', () => {
    const text = 'Hello'
    renderMessageBox(text)

    expect(findMessage(text)).toBeDefined()
  })
})
