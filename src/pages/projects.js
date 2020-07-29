import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

const Projects = () => {
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
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <ul>
        {data.github.search.repos.map(
          ({ repo: { name, url, description } }) => (
            <li>{name}</li>
          )
        )}
      </ul>
    </Layout>
  )
}

export default Projects
