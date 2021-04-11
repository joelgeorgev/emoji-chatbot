import styled from 'styled-components'

type Author = 'You' | 'Bot'

interface Message {
  author: Author
  text: string
}

interface Props {
  message: Message
}

interface StyleProps {
  isBot: boolean
}

const Wrapper = styled.div<StyleProps>`
  display: flex;
  justify-content: flex-end;
  ${({ isBot }) =>
    isBot &&
    `
      justify-content: flex-start;
    `}
`

const StyledMessage = styled.div<StyleProps>`
  margin: 0.25rem;
  border-radius: 0.25rem;
  padding: 0.5rem;
  color: #fff;
  background-color: #555;
  ${({ isBot }) =>
    isBot &&
    `
      color: #000;
      background-color: #eee;
    `}
`

export const MessageBox = ({ message }: Props) => {
  const { author, text } = message
  const isBot = author === 'Bot'

  return (
    <Wrapper isBot={isBot}>
      <StyledMessage isBot={isBot} className='message'>
        {text}
      </StyledMessage>
    </Wrapper>
  )
}
