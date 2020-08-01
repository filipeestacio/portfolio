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
    }
  `)

  return (
    <Layout>
      <h1>Social Media</h1>
      <p>{JSON.stringify(data)}</p>
    </Layout>
  )
}

export default SocialMedia
