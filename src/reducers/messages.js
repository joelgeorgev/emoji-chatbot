export const messages = (state = [], action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      const message = action.message
      return [...state, { author: 'You', message }, { author: 'Bot', message }]
    default:
      return state
  }
}