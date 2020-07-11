import { connect } from 'react-redux'

import { MessageStream } from '.'
import * as selectors from '../../reducers'

const mapStateToProps = (state) => ({
  messages: selectors.getMessages(state)
})

export const ConnectedMessageStream = connect(mapStateToProps)(MessageStream)
