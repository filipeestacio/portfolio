import React, { useState } from "react"
import { animated, useSpring } from "react-spring"
import styled from "styled-components"

const FlexWrapper = styled.div``

const Toggle = () => {
  const [isToggled, setToggle] = useState(false)
  const animation = useSpring({
    fontSize: isToggled ? "5rem" : "2rem",
    color: isToggled ? "tomato" : "green",
  })

  return (
    <FlexWrapper>
      <h4>Using React-Spring</h4>
      <button onClick={() => setToggle(!isToggled)}>Click me</button>
      <animated.h1 style={animation}>
        {isToggled ? "Giant man!" : "I can grow..."}
      </animated.h1>
    </FlexWrapper>
  )
}

export default Toggle
