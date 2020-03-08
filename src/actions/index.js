import { SEND_MESSAGE, MESSAGE_TRANSLATED } from '../constants/ActionTypes'

export const sendMessage = (text) => ({
  type: SEND_MESSAGE,
  payload: { text }
})

export const messageTranslated = (text) => ({
  type: MESSAGE_TRANSLATED,
  payload: { text }
})
