export type Author = 'You' | 'Bot'

export interface Message {
  author: Author
  text: string
}
