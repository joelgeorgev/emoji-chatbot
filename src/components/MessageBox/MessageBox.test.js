import React from 'react'
import { render } from '@testing-library/react'

import { MessageBox } from '.'

const createDefaultProps = () => ({ message: { author: '', text: '' } })
const createProps = (props) => ({ ...createDefaultProps(), ...props })

describe('MessageBox', () => {
  describe('When given a message object', () => {
    test('renders the message', () => {
      const text = 'Hello World'
      const { getByText } = render(
        <MessageBox {...createProps({ message: { text } })} />
      )

      expect(getByText(text)).toBeDefined()
    })
  })
})
