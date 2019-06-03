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
      id: 1,
      name: "MyUtilityConnection",
      description: `Building a web app to solve a problem in the UK utilities industry. 
        Currently using NodeJS, MongoDB and GraphQL for the backend and React for the frontend. 
        Main challenge is in writing a complex business logic in the backend and exposing it via a custom GraphQL Schema`,
      color: "teal",
    },
    {
      id: 2,
      name: "StockBar",
      description: `Building a mobile app to facilitate the stock management in a local hospital by using the camera on a mobile phone to read from and write to a database. 
        The staff needs to juggle an extraordinary number of responsibilities and this will be 
        developed to be as quick and unobtrusive as possible. Full tech stack not yet defined but should use React-Native to develop for mobile platforms.`,
      color: "dodgerblue",
    },
    {
      id: 3,
      name: "SnagTracker",
      description: `A mobile app focused on improving the communication between clients and contractors in the "after-care period" of home renovation works.
        In simple terms it will be a cross between Instagram and To-do lists, with performance analytics mixed in.`,
      color: "rebeccapurple",
    },
    {
      id: 4,
      name: "WaterPredictions",
      description:
        "While working for Veolia Water in Portugal I developed a proof of concept in C# for a software that would take historical data from local telemetry, factor in long range weather patterns and show the optimal configuration of the water network one week ahead to minimise the cost of acquisition of water from adjacent companies.",
      color: "firebrick",
    },
    {
      id: 5,
      name: "Portfolio",
      description:
        "This website was built with Gatsby, but not yet making the most of what a JAM stack can do (Javascript And Markup). In the near future I will add my own blog as well as well as introduce several code optimisations and new features",
      color: "orangered",
    },
  ]

  return (
    <Layout>
      <h1>My Projects</h1>
      <p>
        As a Junior Developer my learning and development is mostly motivated by
        coming across different suggestions and trying to implement them,
        overcoming challenges as they arise. Here are some of the projects I
        have worked on or am actively working on to overcome challenges in
        backend development.
      </p>
      <p>Feel free to ask me about them.</p>
      <ProjectsWrapper>
        {myProjects.map(({ id, name, description, color }) => (
          <FlipCard key={id} title={name} content={description} color={color} />
        ))}
      </ProjectsWrapper>
    </Layout>
  )
}

export default Projects
