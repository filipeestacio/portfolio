import React from "react"
import Layout from "../components/layout"
import FlipCard from "../components/flipCard"
import styled from "styled-components"

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Projects = () => {
  const myProjects = [
    {
      name: "MyUtilityConnection",
      description: `Building a web app to solve a problem in the UK utilities industry. 
        Currently using NodeJS, MongoDB and GraphQL for the backend and React for the frontend. 
        Main challenge is in writing a complex business logic in the backend and exposing it via a custom GraphQL Schema`,
      color: "teal",
    },
    {
      name: "StockBar",
      description: `Building a mobile app to facilitate the stock management in a local hospital by using the camera on a mobile phone to read from and write to a database. 
        The staff needs to juggle an extraordinary number of responsibilities and this will be 
        developed to be as quick an unobtrusive as possible. Full tech stack not yet defined but should use React-Native to develop for mobile platforms.`,
      color: "dodgerblue",
    },
    {
      name: "SnagTracker",
      description: `A mobile app focused on improving the communication between clients and contractors in the "after-care period" of home renovation works.
        In simple terms it will be a cross between Instagram and To-do lists, with performance analytics mixed in.`,
      color: "rebeccapurple",
    },
  ]

  return (
    <Layout>
      <h1>My Projects</h1>
      <p>
        These are ideas currently on my to-do list and parked while I develop my
        knowledge to overcome various challenges in backend development.
      </p>
      <ProjectsWrapper>
        {myProjects.map(({ name, description, color }) => (
          <FlipCard title={name} content={description} color={color} />
        ))}
      </ProjectsWrapper>
    </Layout>
  )
}

export default Projects
