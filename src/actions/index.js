import { SEND_MESSAGE, SAVE_MESSAGE } from '../constants/ActionTypes'

export const sendMessage = (message) => {
  return {
    type: SEND_MESSAGE,
    message
  }
}

export const saveMessage = (payload) => {
  return {
    type: SAVE_MESSAGE,
    payload
  }
}