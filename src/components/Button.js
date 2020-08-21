import styled from "styled-components"

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  height: 50px;
  padding: 10px 14px 10px 14px;
  border: none;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${props => props.theme.colors.secondary};
  text-align: center;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 10px;
  background-color: ${props => props.theme.colors.primary};
  gap: 20px;
`
