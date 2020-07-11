import { connect } from 'react-redux'

import { MessageStream } from '.'

const mapStateToProps = (state) => ({
  messages: state.messages
})

export const ConnectedMessageStream = connect(mapStateToProps)(MessageStream)
