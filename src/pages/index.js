import React from "react"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import { theme } from "../theme/theme"
import Navbar from "../components/navbar"
import { animated, useSpring } from "react-spring"
import { graphql } from "gatsby"
import Helmet from "react-helmet"

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.secondary};
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
`
const NameWrapper = styled(animated.div)`
  display: inline-block;
  color: ${props => props.theme.colors.primary};
`

const Title = styled(animated.h1)`
  font-family: ${props => props.theme.fonts.title};
  font-size: 3rem;
  font-weight: 700;
`

const SubTitle = styled.h3`
  font-weight: 400;
  margin: 5%;
`

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default props => {
  const springConfig = { mass: 1, tension: 170, friction: 250 }

  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: springConfig,
  })

  const drawBorder = useSpring({
    from: { width: 200 },
    to: { width: 500 },
  })

  return (
    <>
      <Helmet title={props.data.site.siteMetadata.title}>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>{props.data.site.siteMetadata.title}</title>
        <link rel="canonical" href="https://filipeestacio.github.io/" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <PageWrapper>
          <NameWrapper style={drawBorder}>
            <Title style={fade}>{props.data.site.siteMetadata.title}</Title>
          </NameWrapper>
          <SubTitle>A Junior Full-Stack Developer</SubTitle>
          <NavWrapper>
            <Navbar style={{ flexDirection: "row" }} />
          </NavWrapper>
        </PageWrapper>
      </ThemeProvider>
    </>
  )
}
