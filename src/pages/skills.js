import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const SkillCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const SkillCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  border: 1px solid white;
  border-radius: 4px;
  margin: 2px;
  &:hover {
    box-shadow: 0 0 3px 6px tomato;
  }
`

const Skills = () => {
  const mySkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "GraphQL",
    "Styled Components",
    "Gatsby",
    "React-Spring",
  ]
  return (
    <Layout>
      <h1>Skills</h1>
      <SkillCards>
        {mySkills.map(mySkill => (
          <SkillCard key={mySkills.indexOf(mySkill)}>{mySkill}</SkillCard>
        ))}
      </SkillCards>
    </Layout>
  )
}

export default Skills
