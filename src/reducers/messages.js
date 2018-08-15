export const messages = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_MESSAGE':
      const { author, message } = action.payload
      return [...state, { author, message }]
    default:
      return state
  }
}