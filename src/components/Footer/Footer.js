import React from "react"
import { StyledFooter, SocialMediaList, SocialMediaLink } from "./Footer.styled"

const Footer = () => (
  <StyledFooter>
    <SocialMediaList>
      <SocialMediaLink href="https://github.com/filipeestacio">
        Github
      </SocialMediaLink>
      <SocialMediaLink href="https://twitter.com/FilipeEstacio">
        Twitter
      </SocialMediaLink>
      <SocialMediaLink href="https://www.linkedin.com/in/filipe-est%C3%A1cio-1b7bbb20/">
        LinkedIn
      </SocialMediaLink>
    </SocialMediaList>
  </StyledFooter>
)

export default Footer
