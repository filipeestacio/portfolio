import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const TextBox = styled.div`
  max-width: 500px;
`

const Photo = styled(Img)`
  width: 300px;
  border-radius: 4px;
  margin: 20px;
`

const StyledLink = styled(Link)`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
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
        <TextBox>
          <p>
            I graduated as a Civil Engineer in 2007. Since then I have worked in
            various roles in the Water Industry both in Portugal and in the UK,
            from data analyst to engineer to people manager and leader.
          </p>
          <p>
            In 2018, feeling that I could be doing more for my chosen field I
            have decided to learn web development. This has taken me on a path
            of learning at a pace that I only vaguely remembered from
            university. The feeling of being able to build my own tools and
            seeing things grow in front of me was amazing. I was hooked.
          </p>
          <p>
            <StyledLink to="/skills">
              Having acquired working knowledge of various front-end and
              back-end web development tools
            </StyledLink>
            , I am now looking for a job as a junior web developer. My goal is
            to apply the human-centered principles of civil engineering to
            software development.
          </p>
          <p>
            <StyledLink to="/contact">Contact me!</StyledLink>
          </p>
        </TextBox>
        <Photo fluid={props.data.file.childImageSharp.fluid} />
      </ContentWrapper>
    </Layout>
  )
}

export default About
