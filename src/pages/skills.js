import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const SkillCards = styled.ul`
  padding: 10px;
  border: 1px solid ${props => props.theme.colors.primary};
  list-style: none;
  margin: 10px;
  border-radius: 4px;
  max-width: 500px;
  font-size: 0.875rem;
  line-height: 1rem;
  background: green;
  & > h4 {
    color: red;
  }
  & > li {
    padding-left: 20px;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Skills = () => {
  const websiteSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "GraphQL",
    "Styled Components",
    "Gatsby",
    "React-Spring",
  ]

  const familiarSkills = ["NodeJS", "ExpressJS", "Git"]

  return (
    <Layout>
      <h1>Skills</h1>
      <Wrapper>
        <h4>This website was built with</h4>
        <SkillCards>
          {websiteSkills.map(mySkill => (
            <li key={websiteSkills.indexOf(mySkill)}>{mySkill}</li>
          ))}
        </SkillCards>
      </Wrapper>
      <Wrapper>
        <h4>Besides these, I am also familiar with</h4>
        <SkillCards>
          {familiarSkills.map(skill => (
            <li key={familiarSkills.indexOf(skill)}>{skill}</li>
          ))}
        </SkillCards>
      </Wrapper>
    </Layout>
  )
}

export default Skills
