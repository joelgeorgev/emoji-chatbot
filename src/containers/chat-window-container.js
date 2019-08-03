import { connect } from 'react-redux'

import { ChatWindow } from '../components'
import { sendMessage } from '../actions'
import * as selectors from '../reducers'

const mapStateToProps = (state) => ({
  messages: selectors.getMessages(state)
})

const mapDispatchToProps = (dispatch) => ({
  onSendMessage: (message) => dispatch(sendMessage(message))
})

export const ChatWindowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatWindow)
