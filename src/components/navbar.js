import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"

const StyledNav = styled.nav`
  grid-area: navbar;
  width: auto;
  display: flex;
  flex-direction: ${props => props.direction};
  padding: 20px;
  font-family: "Amatic SC";

  @media (max-width: 700px) {
    flex-direction: row;
    flex-wrap: wrap;
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

const Navbar = ({ direction }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            menuLinks {
              id
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <StyledNav direction={direction}>
        {data.site.siteMetadata.menuLinks.map(menuLink => (
          <StyledLink
            to={menuLink.link}
            key={menuLink.id}
            activeClassName="active"
          >
            {menuLink.name}
          </StyledLink>
        ))}
      </StyledNav>
    )}
  />
)

export default Navbar
