import { connect } from 'react-redux'

import { ChatWindow } from '../components'
import { sendMessage } from '../actions'

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSendMessage: (message) => dispatch(sendMessage(message))
  }
}

export const ChatWindowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatWindow)
