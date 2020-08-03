import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StyledRepoList } from "./RepoList.styled"
import Repo from "../Repo"

const RepoList = () => {
  const data = useStaticQuery(graphql`
    query {
      github {
        search(
          type: REPOSITORY
          query: "user:filipeestacio topic:portfolio"
          last: 10
        ) {
          repos: edges {
            repo: node {
              ... on GITHUB_Repository {
                name
                url
                description
                issues(last: 3) {
                  nodes {
                    title
                    createdAt
                    bodyText
                  }
                  totalCount
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <StyledRepoList>
      {data.github.search.repos.map(repo => (
        <Repo content={repo} />
      ))}
    </StyledRepoList>
  )
}

export default RepoList
