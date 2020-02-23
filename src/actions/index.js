import { SEND_MESSAGE, SAVE_TRANSLATED_MESSAGE } from '../constants/ActionTypes'

export const sendMessage = (text) => ({
  type: SEND_MESSAGE,
  payload: { text }
})

export const saveTranslatedMessage = (text) => ({
  type: SAVE_TRANSLATED_MESSAGE,
  payload: { text }
})
