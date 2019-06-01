import React from "react"
import styled from "styled-components"
import Logo from "./logo"

const StyledHeader = styled.header`
  grid-area: header;
  padding: 20px;
`

const Header = () => (
  <StyledHeader>
    <Logo />
  </StyledHeader>
)

export default Header
