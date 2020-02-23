import React from 'react'
import { render } from '@testing-library/react'

import { MessageBox } from '.'

const createDefaultProps = () => ({
  message: { author: '', text: '' }
})

const renderMessageBox = (props) =>
  render(<MessageBox {...createDefaultProps()} {...props} />)

describe('MessageBox', () => {
  test('renders a message', () => {
    const text = 'Hello'
    const { getByText } = renderMessageBox({ message: { text } })

    expect(getByText(text)).toBeDefined()
  })
})
