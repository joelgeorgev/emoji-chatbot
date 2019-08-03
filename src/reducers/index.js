import { combineReducers } from 'redux'

import { messages } from './messages'

export const rootReducer = combineReducers({ messages })

// Selectors
export const getMessages = (state) => state.messages
