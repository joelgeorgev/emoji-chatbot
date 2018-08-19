import { SEND_MESSAGE } from '../constants/ActionTypes'

export const sendMessage = (message) => {
  return {
    type: SEND_MESSAGE,
    message
  }
}