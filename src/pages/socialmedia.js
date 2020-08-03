import React from "react"
import Layout from "../components/Layout"
import Gallery from "../components/Gallery"
import TweetList from "../components/TweetList"
import styled from "styled-components"

const Note = styled.p`
  font-size: 0.6rem;
  font-style: italic;
`

const Link = styled.a`
  text-decoration: none;
  color: black;
`

const SocialMedia = () => {
  return (
    <Layout>
      <h1>Social Media</h1>
      <h2>
        <Link
          href="https://twitter.com/FilipeEstacio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </Link>
      </h2>

      <TweetList />
      <Note>
        This is my twitter feed, filtered by posts containing #portfolio
      </Note>
      <h2>
        <Link
          href="https://www.instagram.com/adventures.of.figo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </Link>
      </h2>
      <Gallery />
      <Note>
        This is my dog's intstagram. I had to ask for his, since mine is set to
        private!
      </Note>
    </Layout>
  )
}

export default SocialMedia
