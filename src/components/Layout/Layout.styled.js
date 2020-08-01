import styled from "styled-components"

const Grid = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.primary};
  display: grid;

  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "navbar main"
    "footer footer";

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`

export { Grid }
