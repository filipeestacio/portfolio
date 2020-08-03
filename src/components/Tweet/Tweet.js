import React from "react"
import { StyledTweet, Content, Date } from "./Tweet.styled"

const date = require("date-and-time")

export default function Tweet(props) {
  const {
    content: { full_text, created_at },
  } = props

  return (
    <StyledTweet>
      <Content>{full_text}</Content>
      <Date>{created_at}</Date>
    </StyledTweet>
  )
}
