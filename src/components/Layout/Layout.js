import React from "react"
import Helmet from "react-helmet"
import { graphql, StaticQuery } from "gatsby"

// import styled-components dependencies
import { ThemeProvider } from "styled-components"
import { theme } from "../../theme/theme"

// Import components
import { Grid } from "./Layout.styled"
import Main from "./Main"
import Header from "./Header"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  // return JSX
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet title={data.site.siteMetadata.title}>
            <html lang="en" />
            <meta charSet="utf-8" />
            <title>{data.site.siteMetadata.title}</title>
            <link rel="canonical" href="https://filipeestacio.github.io/" />
          </Helmet>
          <ThemeProvider theme={theme}>
            <Grid>
              <Header>{data.site.siteMetadata.title}</Header>
              <Navbar direction="column">Navbar</Navbar>
              <Main>{children}</Main>
              <Footer>Footer</Footer>
            </Grid>
          </ThemeProvider>
        </>
      )}
    />
  )
}

export default Layout
