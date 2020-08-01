import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { StyledNav, StyledLink } from "./Navbar.styled"

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
