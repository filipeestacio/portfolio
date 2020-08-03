import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StyledTweetList } from "./TweetList.styled"
import Tweet from "../Tweet"

export const TweetList = () => {
  const data = useStaticQuery(graphql`
    query {
      allTwitterStatusesUserTimelineMyTweets(
        filter: {
          entities: { hashtags: { elemMatch: { text: { eq: "portfolio" } } } }
        }
      ) {
        tweets: edges {
          tweet: node {
            full_text
            created_at
          }
        }
      }
    }
  `)

  return (
    <StyledTweetList>
      {data.allTwitterStatusesUserTimelineMyTweets.tweets.map((item, i) => {
        return <Tweet id={i} content={item.tweet} />
      })}
    </StyledTweetList>
  )
}

export default TweetList
