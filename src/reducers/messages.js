import { SAVE_USER_MESSAGE, SAVE_BOT_MESSAGE } from '../constants/ActionTypes'

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
    case SAVE_USER_MESSAGE:
      return [...state, { author: 'You', text }]
    case SAVE_BOT_MESSAGE:
      return [...state, { author: 'Bot', text }]
    default:
      return state
  }
}
