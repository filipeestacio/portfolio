import React, { useState } from "react"
import { ImageWrapper, StyledImage, Caption } from "./Image.styled"
import { useSpring, animated } from "react-spring"

const AnimatedCaption = animated(Caption)

const Image = props => {
  const [hover, setHover] = useState(false)

  const fade = useSpring({
    opacity: hover ? 1 : 0,
  })
  const { fluid, caption } = props
  return (
    <ImageWrapper
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <StyledImage fluid={fluid} />
      <AnimatedCaption style={fade}>{caption}</AnimatedCaption>
    </ImageWrapper>
  )
}

export default Image
