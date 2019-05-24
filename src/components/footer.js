import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  color: ${props => props.theme.colors.secondary};
  background: ${props => props.theme.colors.primary};
  padding: 1.45rem;
`

const Footer = () => <FooterWrapper>© Filipe Estacio 2019</FooterWrapper>

export default Footer
