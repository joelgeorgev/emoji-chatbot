import { SEND_MESSAGE, SAVE_MESSAGE } from '../constants/ActionTypes'

// UI actions
export const sendMessage = (message) => ({
  type: SEND_MESSAGE,
  message
})

// Saga actions
export const saveMessage = (payload) => ({
  type: SAVE_MESSAGE,
  payload
})
