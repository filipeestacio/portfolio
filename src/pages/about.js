import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import styled from "styled-components"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const ImageCropper = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 50%;
  shape-outside: circle(50%);
  float: left;
  margin: 0 30px 30px 0;
`

const Photo = styled(Img)`
  width: 300px;
  margin: 0 auto;
`

const Text = styled.div`
  padding: 20px;
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
      <ImageCropper>
        <Photo fluid={props.data.file.childImageSharp.fluid} />
      </ImageCropper>
      <Text>
        <p>
          Veniam soluta aut et provident. Neque exercitationem corrupti nam ex
          quis beatae ut ea. Necessitatibus debitis necessitatibus maiores
          aliquid dolore. Sapiente error dolor recusandae impedit a quaerat
          aliquam. Et itaque dolor non quidem minima quos rem inventore. Natus
          hic rerum qui facere in sit.
        </p>
        <p>
          Veniam soluta aut et provident. Neque exercitationem corrupti nam ex
          quis beatae ut ea. Necessitatibus debitis necessitatibus maiores
          aliquid dolore. Sapiente error dolor recusandae impedit a quaerat
          aliquam. Et itaque dolor non quidem minima quos rem inventore. Natus
          hic rerum qui facere in sit.
        </p>
        <p>
          Veniam soluta aut et provident. Neque exercitationem corrupti nam ex
          quis beatae ut ea. Necessitatibus debitis necessitatibus maiores
          aliquid dolore. Sapiente error dolor recusandae impedit a quaerat
          aliquam. Et itaque dolor non quidem minima quos rem inventore. Natus
          hic rerum qui facere in sit.
        </p>
      </Text>
      <h3>Looking for</h3>
      <p>
        Ut officiis excepturi accusamus ipsam consequuntur. Qui at officiis
        asperiores earum est quas. Omnis itaque quia nostrum distinctio
        voluptates voluptates. Culpa unde itaque rerum dolorum ea. Nisi
        architecto sed eum ad.
      </p>
      <Link to="/contact">Contact me!</Link>
    </Layout>
  )
}

export default About
