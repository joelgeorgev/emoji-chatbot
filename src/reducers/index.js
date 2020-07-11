import { SEND_MESSAGE, MESSAGE_TRANSLATED } from '../actions'

const initialState = {
  messages: [
    {
      author: 'Bot',
      text: 'Write a message and see it translated to emojis!'
    }
  ]
}

const sendMessage = (state, { payload }) => ({
  ...state,
  messages: [...state.messages, { author: 'You', text: payload.text }]
})

const messageTranslated = (state, { payload }) => ({
  ...state,
  messages: [...state.messages, { author: 'Bot', text: payload.text }]
})

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return sendMessage(state, action)
    case MESSAGE_TRANSLATED:
      return messageTranslated(state, action)
    default:
      return state
  }
}
