import React from "react"
import Layout from "../components/Layout"
import Gallery from "../components/Gallery"
import { graphql, useStaticQuery } from "gatsby"

const SocialMedia = () => {
  const data = useStaticQuery(graphql`
    query {
      allTwitterStatusesUserTimelineMyTweets {
        tweets: edges {
          tweet: node {
            full_text
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Social Media</h1>
      {JSON.stringify(data)}
      <h2>Twitter</h2>
      <h2>Instagram</h2>
      <Gallery />
    </Layout>
  )
}

export default SocialMedia
