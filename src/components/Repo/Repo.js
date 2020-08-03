import React, { useState } from "react"
import { Wrapper, Title, Description } from "./Repo.styled"

const Repo = ({
  content: {
    repo: { name, url, description },
  },
}) => {
  const [toggle, setToggle] = useState(false)

  return (
    <Wrapper
      onClick={() => {
        setToggle(!toggle)
      }}
    >
      <Title>{name.replaceAll("-", " ")}</Title>
      <Description>
        <a href={url} target="_blank" rel="noreferrer">
          {description}
        </a>
      </Description>
    </Wrapper>
  )
}

export default Repo
