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

const Emphasis = styled.p`
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  text-align: right;
  padding-right: 150px;

  @media (max-width: 1280px) {
    padding-right: 0px;
  }
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
        <Emphasis>I started out as a Civil Engineer.</Emphasis>
        <p>
          From very early on I have used code to solve problems, both during my
          studies and my early professional life. Civil Engineers design, build
          and maintain the foundations for our modern society. Usually this
          means our roads and bridges, drinking water, energy systems and
          infrastructure for a cleaner environment. We are responsible for
          understanding the needs of the civilian community and engineer answers
          to them.
        </p>
        <Emphasis>But what if this also meant our digital world?</Emphasis>
        <p>
          <a
            href="https://www.wsj.com/articles/every-company-is-now-a-tech-company-1543901207"
            target="_blank"
            rel="noopener noreferrer"
          >
            Every company is a tech company
          </a>
          . More than ever the web is how we interact with the world. And beyond
          our favourite device is an overwhelming amount of digital
          infrastructure to hold it all together. Our interfaces are getting
          slicker. But are our applications providing the best solutions to our
          problems?
        </p>
        <Emphasis>Are we sure we know what our problems are?</Emphasis>
        <p>
          Slicker. Faster. More flexible. It needs to do everything. Synergy.
          Whichever last buzzword you've heard at a meeting. These are all
          things we think or have thought we wanted in an application when we
          are conceptualising it. And it usually falls short. This happens
          because the designer or software developer didn't fully understand the
          problem you are trying to solve or the client hasn't been able to
          articulate it properly. Most of the time it's a bit of column A and a
          bit of column B.
        </p>
        <Emphasis>I am a problem solver at heart. I fix things.</Emphasis>
        <p>
          No real world problem is too big to be tackled. If it seems that way,
          we just haven't broken it down to solvable pieces just yet. I've been
          doing this for years. I want to keep doing it.
        </p>
      </Text>
      <h3>Looking for</h3>
      <p>
        I'm looking for contract work or a full-time opportunity as a junior
        software developer. I'm also always on the lookout for good ideas and
        would love to join a startup working in something I strongly believe in.
      </p>

      <Link to="/contact">Get in touch! Let's grab a cup of coffee.</Link>
    </Layout>
  )
}

export default About
