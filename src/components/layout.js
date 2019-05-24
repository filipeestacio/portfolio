import React from "react"
import { GlobalStyle } from "../theme/globalStyle"
import Header from "../components/header"
import Footer from "../components/footer"
import { ThemeProvider } from "styled-components"
import styled from "styled-components"
import { theme } from "../theme/theme"

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex: 1;
  padding: 1rem 1rem 1rem 1rem;
  margin: 10px;
  border: 1px solid black;
`

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <GlobalStyle />
        <Header />
        <Main>{children}</Main>
        <Footer />
      </PageWrapper>
    </ThemeProvider>
  )
}

export default Layout
