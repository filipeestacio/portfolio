import React from "react"
import styled from "styled-components"

// import react-spring dependencies
import { animated, useSpring } from "react-spring"

const StyledMain = styled(animated.main)`
  grid-area: main;
  /* height: 100%;*/
  padding: 20px 50px 20px 50px;

  @media (max-width: 700px) {
    padding: 20px;
  }
`

const Main = ({ children }) => {
  // declare react-spring hook
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return <StyledMain style={fade}>{children}</StyledMain>
}

export default Main
