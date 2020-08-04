import React, { useState } from "react"
import { Wrapper, Title, Description, Logo, LogoWrapper } from "./Repo.styled"
import { graphql, useStaticQuery } from "gatsby"

const Repo = ({
  content: {
    repo: { name, url, description },
  },
}) => {
  const data = useStaticQuery(graphql`
    query {
      githubImage: file(relativePath: { eq: "github.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, maxHeight: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      codesandboxImage: file(relativePath: { eq: "codesandbox.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, maxHeight: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [toggle, setToggle] = useState(false)

  return (
    <Wrapper
      onClick={() => {
        setToggle(!toggle)
      }}
    >
      <Title>{name}</Title>
      <Description>{description}</Description>
      <LogoWrapper>
        <a href={url} target="_blank" rel="noreferrer">
          <Logo fluid={data.githubImage.childImageSharp.fluid} />
        </a>
        <a
          href={url.replace("github", "githubbox")}
          target="_blank"
          rel="noreferrer"
        >
          <Logo fluid={data.codesandboxImage.childImageSharp.fluid} />
        </a>
      </LogoWrapper>
    </Wrapper>
  )
}

export default Repo
