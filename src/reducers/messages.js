import { SEND_MESSAGE, SAVE_TRANSLATED_MESSAGE } from '../constants/ActionTypes'

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
    case SAVE_TRANSLATED_MESSAGE:
      return [...state, { author: 'Bot', text }]
    default:
      return state
  }
}
