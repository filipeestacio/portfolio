import React from "react"
import { useSpring } from "react-spring"
import { StyledMain } from "./Main.styled"

const Main = ({ children }) => {
  // declare react-spring hook
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  return <StyledMain style={fade}>{children}</StyledMain>
}

export default Main
