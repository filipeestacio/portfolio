import styled from "styled-components"
import Img from "gatsby-image"

const ImageWrapper = styled.div`
  position: relative;
`
const StyledImage = styled(Img)`
  position: absolute;
  z-index: 1;
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
  font-size: 1vw;
  line-height: 1.5vw;

  display: flex;
  align-items: center;
  text-align: center;

  @media (max-width: 1200px) {
    font-size: 1.8vw;
    line-height: 2.6vw;
  }

  @media (max-width: 700px) {
    font-size: 5vw;
    line-height: 7.5vw;
  }
`

export { ImageWrapper, StyledImage, Caption }
