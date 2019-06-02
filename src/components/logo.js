import React from "react"
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

const Logo = () => (
  <StyledLogo>
    <TitleText>Filipe Estácio</TitleText>
    <SubTitleText>A Civil Engineer gone Digital</SubTitleText>
  </StyledLogo>
)

export default Logo
