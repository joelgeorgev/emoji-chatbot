import { ComponentProps } from 'react'
import { render, screen } from '@testing-library/react'

import { MessageBox } from '.'

type Props = ComponentProps<typeof MessageBox>
type Message = Props['message']

const createMessage = (text: string): Message => ({ author: 'You', text })

const renderMessageBox = (text: string) =>
  render(<MessageBox message={createMessage(text)} />)

const findMessage = (text: string): HTMLDivElement =>
  screen.getByText(text) as HTMLDivElement

describe('MessageBox', () => {
  test('renders a message', () => {
    const text = 'Hello'
    renderMessageBox(text)

    expect(findMessage(text)).toBeDefined()
  })
})
