import {
  SEND_MESSAGE,
  SAVE_USER_MESSAGE,
  SAVE_BOT_MESSAGE
} from '../constants/ActionTypes'

export const sendMessage = (text) => ({
  type: SEND_MESSAGE,
  payload: { text }
})

export const saveUserMessage = (text) => ({
  type: SAVE_USER_MESSAGE,
  payload: { text }
})

export const saveBotMessage = (text) => ({
  type: SAVE_BOT_MESSAGE,
  payload: { text }
})
