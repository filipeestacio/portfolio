import styled from "styled-components"

const StyledFooter = styled.footer`
  grid-area: footer;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 20px;
`

const SocialMediaList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const SocialMediaLink = styled.a`
  display: flex;
  align-items: center;
  margin-left: 5px;
  margin-right: 5px;
  text-decoration: none;
  color: ${props => props.theme.colors.primary};
  padding: 5px 10px;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 4px;

  &:hover {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secondary};
  }
`

export { StyledFooter, SocialMediaList, SocialMediaLink }
