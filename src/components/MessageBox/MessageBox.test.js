import React from 'react'
import { render } from '@testing-library/react'

import { MessageBox } from '.'

describe('MessageBox', () => {
  describe('When given a message object', () => {
    const getDefaultProps = () => ({ message: { author: '', text: '' } })
    const createProps = (props) => ({ ...getDefaultProps(), ...props })

    test('renders the message', () => {
      const text = 'Hello World'
      const { getByText } = render(
        <MessageBox {...createProps({ message: { text } })} />
      )

      expect(getByText(text)).toBeDefined()
    })
  })
})
