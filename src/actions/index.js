export const SEND_MESSAGE = 'SEND_MESSAGE'
export const MESSAGE_TRANSLATED = 'MESSAGE_TRANSLATED'

export const sendMessage = (text) => ({
  type: SEND_MESSAGE,
  payload: { text }
})

export const messageTranslated = (text) => ({
  type: MESSAGE_TRANSLATED,
  payload: { text }
})
