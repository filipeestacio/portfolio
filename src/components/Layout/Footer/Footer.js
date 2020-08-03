import React from "react"
import { StyledFooter, SocialMediaList, SocialMediaLink } from "./Footer.styled"

const Footer = () => (
  <StyledFooter>
    <SocialMediaList>
      <SocialMediaLink
        href="https://github.com/filipeestacio"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </SocialMediaLink>
      <SocialMediaLink
        href="https://twitter.com/FilipeEstacio"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </SocialMediaLink>
      <SocialMediaLink
        href="https://www.linkedin.com/in/filipe-est%C3%A1cio-1b7bbb20/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </SocialMediaLink>
    </SocialMediaList>
  </StyledFooter>
)

export default Footer
