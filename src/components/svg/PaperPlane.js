import React from "react"
import styled, { keyframes } from "styled-components"
import { Button } from "../Button"

const paperPlaneScoping = keyframes`
  0% {
    transform: translateY(0px) scale(1);
  }
  100% {
    transform: translateY(-10px) scale(1);
  }
`
const paperPlaneSoaring = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  40% {
    transform: rotate(7deg) scale(1);
  }
  50% {
    transform: rotate(7deg) scale(1);
  }
  75% {
    transform: rotate(0deg) scale(1);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
`

const StyledSVG = styled.svg`
  width: auto;
  height: 100%;
  ${Button}:hover & {
    animation-timing-function: linear;
    animation: ${paperPlaneSoaring} 2s forwards infinite;
  }
`

const StyledPlane = styled.div`
  height: 100%;
  ${Button}:hover & {
    animation-timing-function: ease-in-out;
    animation: ${paperPlaneScoping} 1.5s alternate infinite;
  }
`

export const PaperPlane = () => {
  return (
    <StyledPlane>
      <StyledSVG
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        width="557.576px"
        height="515.238px"
        viewBox="0 0 557.576 515.238"
        enable-background="new 0 0 557.576 515.238"
        xmlSpace="preserve"
      >
        <polygon
          fill="#FBFBFC"
          points="557.576,0 0,340.556 223.771,345.297 327.579,388.418 512.84,515.238 "
          stroke="black"
          strokeWidth="5px"
        />
        <polygon
          fill="#DEE0E1"
          points="244.991,479.719 218.447,345.297 557.576,0 330.749,390.586 "
          stroke="black"
          strokeWidth="5px"
        />
      </StyledSVG>
    </StyledPlane>
  )
}
