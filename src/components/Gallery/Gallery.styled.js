import styled from "styled-components"

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto;
  grid-gap: 10px 10px;
  justify-content: center;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto auto;
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`

export { StyledGallery }
