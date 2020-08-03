import styled from "styled-components"
import { Link } from "gatsby"

const StyledNav = styled.nav`
  grid-area: navbar;
  width: auto;
  display: flex;
  flex-direction: ${props => props.direction};
  padding: 20px;
  font-family: "Amatic SC";

  @media (max-width: 700px) {
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto;
    grid-gap: 10px;
    justify-items: space-between;
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.primary};
  padding: 5px 10px;
  border-radius: 4px;
  margin: 10px;
  width: 80px;
  text-align: center;

  @media (max-width: 700px) {
    font-weight: 700;
  }

  &:not(.active):hover {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secondary};
    animation: pulse 1s infinite alternate;
  }

  @keyframes pulse {
    0% {
      transform: scale(1, 1);
      opacity: 0.1;
    }
    100% {
      transform: scale(1.1, 1.3);
      opacity: 0.8;
    }
  }

  &.active {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secondary};
    transform: scale(1.1, 1.3);
    font-weight: 700;
  }
`

export { StyledNav, StyledLink }
