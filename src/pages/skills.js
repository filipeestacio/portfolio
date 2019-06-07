import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import _ from "lodash"
import Img from "gatsby-image"

const ScrollWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
  margin-bottom: 50px;
`

const SkillCard = styled.div`
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 210px;
  width: 150px;
  margin: 5px;
  border-radius: 5px;
  border: 2px solid ${props => props.theme.colors.primary};
  &:hover {
    transform: scale(1.2);
    border: 1px solid black;
    box-shadow: 5px 5px 5px 0px black;
    transition: all 0.6s ease;
    z-index: 100;
  }
`

const StyledA = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.secondary};
  padding: 10px 14px 10px 14px;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 400;
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.callToAction},
    ${props => props.theme.colors.callToActionGradient}
  );
  text-align: center;
  width: 100%;
  &:hover {
    transform: scale(1.2);
    box-shadow: 5px 5px 5px 0px black;
    transition: all 0.6s ease;
    z-index: 100;
  }
`

const StyledImg = styled(Img)`
  height: auto;
  width: 70%;
  object-fit: cover;
`

const Skills = () => {
  const data = useStaticQuery(graphql`
    query {
      mySkills: site {
        siteMetadata {
          skills {
            id
            name
            image
          }
        }
      }
      skillImages: allFile(filter: { absolutePath: { regex: "/skills/" } }) {
        nodes {
          name
          childImageSharp {
            fluid(maxHeight: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>What I do</h1>
      <p>
        I combine my experience in people management, leadership, curiosity
        about how things work and passion for achieving excellent user
        experience to:
      </p>
      <ul>
        <li>Create responsive websites that work on a wide range of devices</li>
        <li>Bridge the communication gap between client and developers</li>
        <li>Assist with production of clean and functional design</li>
      </ul>
      <br />
      <p>
        I currently work with the following products and technologies and I am
        always striving to improve and learn new ones:
      </p>
      <ScrollWrapper>
        {data.mySkills.siteMetadata.skills.map(skill => (
          <SkillCard key={skill.id}>
            <StyledImg
              fluid={
                _.find(data.skillImages.nodes, ["name", skill.image])
                  .childImageSharp.fluid
              }
            />
            <h4 style={{ textAlign: "center" }}>{skill.name}</h4>
          </SkillCard>
        ))}
      </ScrollWrapper>
      <br />
      <div>
        <p>
          This website is open source, so you can see under the hood into my
          work.
        </p>
        <p>
          Whenever possible I will work on optimising the code and adding new
          demonstrations of my know-how.
        </p>
        <StyledA href="https://github.com/filipeestacio/portfolio">
          Go to source
        </StyledA>
      </div>
    </Layout>
  )
}

export default Skills
