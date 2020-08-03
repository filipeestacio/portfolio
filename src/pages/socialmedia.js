import React from "react"
import Layout from "../components/Layout"
import Gallery from "../components/Gallery"
import TweetList from "../components/TweetList"

const SocialMedia = () => {
  return (
    <Layout>
      <h1>Social Media</h1>
      <h2>Twitter</h2>
      <TweetList />
      <h2>Instagram</h2>
      <Gallery />
    </Layout>
  )
}

export default SocialMedia
