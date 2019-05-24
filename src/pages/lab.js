import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Toggle from "../components/Toggle"

const Box = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  background: black;
  box-shadow: 0 0 10px 5px green;
  margin: 10px;
`

const Lab = () => (
  <Layout>
    <h3>My Experiments</h3>
    <p>
      This is where I will try different things, eventually linking to different
      projects in a dynamic list of pages, as if it was a blog
    </p>
    <Box />
    <Toggle />
  </Layout>
)

export default Lab
