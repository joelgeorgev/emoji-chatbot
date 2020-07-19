import React from 'react'
import { render, screen } from '@testing-library/react'

import { MessageBox } from '.'

const createMessage = (text) => ({ author: '', text })

const renderMessageBox = (text) =>
  render(<MessageBox message={createMessage(text)} />)

const findMessage = (text) => screen.getByText(text)

describe('MessageBox', () => {
  test('renders a message', () => {
    const text = 'Hello'
    renderMessageBox(text)

    expect(findMessage(text)).toBeDefined()
  })
})
