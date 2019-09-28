import { SEND_MESSAGE, SAVE_MESSAGE } from '../constants/ActionTypes'

// UI actions
export const sendMessage = (text) => ({
  type: SEND_MESSAGE,
  text
})

// Saga actions
export const saveMessage = (payload) => ({
  type: SAVE_MESSAGE,
  payload
})
