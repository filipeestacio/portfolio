import React from "react"
import { StyledImage } from "./Image.styled"

const Image = props => {
  const { fluid } = props
  return <StyledImage fluid={fluid} />
}

export default Image
