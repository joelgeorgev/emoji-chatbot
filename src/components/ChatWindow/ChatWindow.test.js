import React from 'react'
import { render } from '@testing-library/react'

import { ChatWindow } from '.'
import {
  ConnectedMessageStream,
  ConnectedComposeMessage
} from '../../components'

jest.mock('../../components', () => ({
  ConnectedMessageStream: jest.fn(() => null),
  ConnectedComposeMessage: jest.fn(() => null)
}))

const renderChatWindow = () => render(<ChatWindow />)

describe('ChatWindow', () => {
  test('renders connected message stream AND connected compose message', () => {
    renderChatWindow()

    expect(ConnectedMessageStream).toHaveBeenCalledTimes(1)
    expect(ConnectedComposeMessage).toHaveBeenCalledTimes(1)
  })
})
