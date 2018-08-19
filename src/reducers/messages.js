import { SAVE_MESSAGE } from '../constants/ActionTypes'

const initialState = [{
  author: 'Bot',
  message: 'Write a message and see it translated to emojis!'
}]

export const messages = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_MESSAGE:
      const { author, message } = action.payload
      return [...state, { author, message }]
    default:
      return state
  }
}