type Author = 'You' | 'Bot'

export interface Message {
  author: Author
  text: string
}

export interface UserMessage extends Message {
  author: 'You'
}

export interface BotMessage extends Message {
  author: 'Bot'
}
