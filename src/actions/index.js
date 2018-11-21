import { SEND_MESSAGE, SAVE_MESSAGE } from '../constants/ActionTypes'

// UI actions
export const sendMessage = (message) => { return { type: SEND_MESSAGE, message } }

// Saga actions
export const saveMessage = (payload) => { return { type: SAVE_MESSAGE, payload } }