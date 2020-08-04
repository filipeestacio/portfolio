import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const Skills = () => {
  return (
    <Layout>
      <h1>What I do</h1>
      <h2>Think</h2>
      <p>
        I use the principles of Enterprise Architecture to develop a set of
        documents about your business, its strategy and the underlying IT
        architecture. I then make suggestions on what digital solutions could
        lead to achieving your goals.
      </p>
      <h2>Check</h2>
      <p>
        I plan and make low cost experiments and prototypes to validate
        assumptions and solutions. That way you can have the confidence you need
        to invest in a larger scale implementation.
      </p>
      <h2>Do</h2>
      <p>
        I am certified as an AWS Cloud Practitioner and have experience as a
        product owner and project manager. I will find the right professionals
        and coordinate them to see through the delivery of your strategy.
      </p>
      <p>
        <Link to="/contact">If you'd like to work with me, get in touch!</Link>
      </p>
    </Layout>
  )
}

export default Skills
