import { connect } from 'react-redux'

import { ComposeMessage } from '.'
import { sendMessage } from '../../actions'

const mapDispatchToProps = {
  handleSendMessage: (message) => sendMessage(message)
}

export const ConnectedComposeMessage = connect(
  null,
  mapDispatchToProps
)(ComposeMessage)
