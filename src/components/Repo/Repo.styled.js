import styled from "styled-components"
import Img from "gatsby-image"

export const Wrapper = styled.li`
  list-style: none;
  padding: 20px;
  margin: 40px 10px;
  border: 2px solid black;
  border-radius: 20px;

  &:hover {
    background: #cccccc;
  }
`

export const Title = styled.h3`
  text-transform: capitalize;
  a {
    text-decoration: none;
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

export const Logo = styled(Img)`
  width: 30px;
`

export const Description = styled.p``

export const IssueList = styled.ul``

export const Issue = styled.li``
