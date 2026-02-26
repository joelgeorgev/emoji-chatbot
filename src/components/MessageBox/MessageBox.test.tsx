import type { ComponentProps } from 'react'
import { render, screen } from '@testing-library/react'

import { MessageBox } from './MessageBox.tsx'

type Props = ComponentProps<typeof MessageBox>
type Message = Props['message']

const createMessage = (text: string): Message => ({ author: 'You', text })

const renderMessageBox = (text: string) =>
  render(<MessageBox message={createMessage(text)} />)

const findMessage = (text: string): HTMLDivElement => screen.getByText(text)

describe('MessageBox', () => {
  test('renders a message', () => {
    const text = 'Hello'
    renderMessageBox(text)

    const message = findMessage(text)
    expect(message).toBeDefined()
    expect(message.dataset.scrollTarget).toEqual('true')
  })
})
