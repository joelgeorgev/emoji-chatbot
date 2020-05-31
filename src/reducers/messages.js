import { SEND_MESSAGE, MESSAGE_TRANSLATED } from '../actions'

const initialState = [
  {
    author: 'Bot',
    text: 'Write a message and see it translated to emojis!'
  }
]

export const messages = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEND_MESSAGE:
      return [...state, { author: 'You', text: payload.text }]
    case MESSAGE_TRANSLATED:
      return [...state, { author: 'Bot', text: payload.text }]
    default:
      return state
  }
}
