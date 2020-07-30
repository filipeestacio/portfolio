import styled from "styled-components"
import { animated } from "react-spring"

const StyledMain = styled(animated.main)`
  grid-area: main;
  /* height: 100%;*/
  padding: 20px 50px 20px 50px;

  @media (max-width: 700px) {
    padding: 20px;
  }
`

export { StyledMain }
