import React from 'react'
import styled from 'styled-components'

import { ConnectedMessageStream, ConnectedComposeMessage } from '..'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
`

export const ChatWindow = ({ messages, handleSendMessage }) => (
  <Wrapper>
    <ConnectedMessageStream />
    <ConnectedComposeMessage />
  </Wrapper>
)
