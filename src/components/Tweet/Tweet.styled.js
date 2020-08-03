import styled from "styled-components"

const StyledTweet = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  background: black;
  color: white;
  border-radius: 10px;
`

const Content = styled.p`
  font-size: 0.8rem;
  padding: 20px 20px;
`

const Date = styled.div`
  font-size: 0.6rem;
  font-style: italic;
  align-self: end;
  padding: 0 10px 10px 0;
`

export { StyledTweet, Content, Date }
