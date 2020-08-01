import React from "react"
import Layout from "../layout"
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
      allInstaNode {
        grams: edges {
          gram: node {
            id
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
    </Layout>
  )
}

export default SocialMedia
