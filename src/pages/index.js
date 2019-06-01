import React from "react"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import { theme } from "../theme/theme"
import Navbar from "../components/navbar"
import Filipe from "../assets/filipe.svg"
import Estacio from "../assets/estacio.svg"
import { animated, useSpring } from "react-spring"

const PageWrapper = styled.div`
  color: ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.secondary};
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
`

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const NameWrapper = styled(animated.div)`
  max-height: 50vh;
`

const FirstNameWrapper = styled(Filipe)`
  position: relative;
  margin: auto;
  max-height: 30vh;
  fill: ${props => props.theme.colors.primary};
  z-index: 15;
`

const LastNameWrapper = styled(Estacio)`
  position: relative;
  margin: auto;
  max-height: 20vh;
  fill: ${props => props.theme.colors.primary};
  z-index: 5;
`

export default () => {
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { mass: 1, tension: 170, friction: 250 },
  })
  return (
    <ThemeProvider theme={theme}>
      <PageWrapper>
        <NameWrapper style={fade}>
          <FirstNameWrapper />
          <LastNameWrapper />
        </NameWrapper>
        <h2 style={{ margin: "5%" }}>A Junior Full-Stack Developer</h2>
        <NavWrapper>
          <Navbar style={{ flexDirection: "row" }} />
        </NavWrapper>
      </PageWrapper>
    </ThemeProvider>
  )
}
