import { SEND_MESSAGE, MESSAGE_TRANSLATED } from '../actions'

export const initialState = [
  {
    author: 'Bot',
    text: 'Write a message and see it translated to emojis!'
  }
]

export const messages = (
  state = initialState,
  { type, payload: { text } = {} }
) => {
  switch (type) {
    case SEND_MESSAGE:
      return [...state, { author: 'You', text }]
    case MESSAGE_TRANSLATED:
      return [...state, { author: 'Bot', text }]
    default:
      return state
  }
}
