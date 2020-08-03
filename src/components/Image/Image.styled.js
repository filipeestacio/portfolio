import styled from "styled-components"
import Img from "gatsby-image"

const ImageWrapper = styled.div`
  position: relative;
  max-width: 400px;
`
const StyledImage = styled(Img)`
  position: absolute;
  z-index: 1;
  width: 400px;
`

const Caption = styled.p`
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  color: white;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid black;
  line-height: 2rem;

  display: flex;
  align-items: center;
  text-align: center;
`

export { ImageWrapper, StyledImage, Caption }
