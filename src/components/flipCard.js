import React, { useState } from "react"
import { animated, useSpring } from "react-spring"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  max-width: 500px;
  min-width: 300px;
  padding: 20px;
`

const Card = styled(animated.div)`
  display: flex;
  height: 200px;
  width: 100%;
  padding: 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  will-change: transform, opacity;
  border-radius: 4px;
  background: ${props => props.inputcolor};
`

const FrontCard = styled(Card)`
  font-weight: 700;
`

const BackCard = styled(Card)`
  filter: hue-rotate(45deg);
  font-size: 14px;
`

const FlipCard = ({ title, content, color }) => {
  const [isFlipped, setFlipped] = useState(false)

  const { transform, opacity } = useSpring({
    opacity: isFlipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${isFlipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  })

  return (
    <Wrapper onClick={() => setFlipped(!isFlipped)}>
      {!isFlipped ? (
        <FrontCard
          style={{ opacity: opacity.interpolate(o => 1 - 0), transform }}
          inputcolor={color}
        >
          {title}
        </FrontCard>
      ) : (
        <BackCard
          style={{
            opacity,
            transform: transform.interpolate(t => `${t} rotateX(180deg)`),
          }}
          inputcolor={color}
        >
          {content}
        </BackCard>
      )}
    </Wrapper>
  )
}

export default FlipCard
