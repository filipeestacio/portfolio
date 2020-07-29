import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`

const Photo = styled(Img)`
  width: 300px;
  border-radius: 4px;
  margin: 20px;
`

export const query = graphql`
  query {
    file(relativePath: { eq: "filipe.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const About = props => {
  return (
    <Layout>
      <h1>About me</h1>
      <ContentWrapper>
        <Photo fluid={props.data.file.childImageSharp.fluid} />
        <Link to="/contact">Contact me!</Link>
      </ContentWrapper>
    </Layout>
  )
}

export default About
