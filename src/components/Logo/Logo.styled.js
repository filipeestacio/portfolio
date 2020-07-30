import styled from "styled-components"

const StyledLogo = styled.div``

const TitleText = styled.div`
  font-family: ${props => props.theme.fonts.title};
  font-size: 2.5rem;
  text-align: center;
`

const SubTitleText = styled.div`
  font-size: 0.875rem;
  text-align: center;
`

export { StyledLogo, TitleText, SubTitleText }
