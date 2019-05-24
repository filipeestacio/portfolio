import React from "react"
import styled from "styled-components"
import { Link, graphql, useStaticQuery } from "gatsby"

const HeaderWrapper = styled.header`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
`

const Headline = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
  h1 {
    margin: 0;
  }
`

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0px 0px 10px 20px;
`
const activeClassName = "nav-item-active"

const NavLink = styled(Link).attrs({ activeClassName })`
  padding: 1rem;
  margin: 1px;
  text-decoration: none;
  color: ${props => props.theme.colors.secondary};
  &:hover {
    border-radius: 4px;
    transition: background 0.5s, color 0.5s;
    background: green;
    color: black;
  }
  &.activeClassName {
    background: green;
    color: black;
    box-shadow: 0 0 10px green;
  }
`

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `
  )

  return (
    <HeaderWrapper>
      <Headline>
        <h1>{data.site.siteMetadata.title}</h1>
      </Headline>
      <Nav>
        {data.site.siteMetadata.menuLinks.map(menuLink => (
          <NavLink to={menuLink.link}>{menuLink.name}</NavLink>
        ))}
      </Nav>
    </HeaderWrapper>
  )
}

export default Header
