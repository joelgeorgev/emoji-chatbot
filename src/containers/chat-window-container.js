import { connect } from 'react-redux'

import { ChatWindow } from '../components'
import { sendMessage } from '../actions'

const mapStateToProps = (state) => ({
  messages: state.messages
})

const mapDispatchToProps = (dispatch) => ({
  onSendMessage: (message) => dispatch(sendMessage(message))
})

export const ChatWindowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatWindow)
