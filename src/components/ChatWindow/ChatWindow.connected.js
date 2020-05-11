import { connect } from 'react-redux'

import { ChatWindow } from '.'
import { sendMessage } from '../../actions'
import * as selectors from '../../reducers'

const mapStateToProps = (state) => ({
  messages: selectors.getMessages(state)
})

const mapDispatchToProps = (dispatch) => ({
  handleSendMessage: (message) => dispatch(sendMessage(message))
})

export const ConnectedChatWindow = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatWindow)
