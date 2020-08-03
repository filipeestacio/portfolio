import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StyledGallery } from "./Gallery.styled"
import Image from "../Image"

const Gallery = () => {
  // TODO: make the limit and the size of the images into variables?

  const data = useStaticQuery(graphql`
    query {
      allInstaNode(limit: 8) {
        grams: edges {
          gram: node {
            id
            caption
            localFile {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <StyledGallery>
        {data.allInstaNode.grams.map((item, i) => {
          return item.gram.localFile ? (
            <Image
              fluid={item.gram.localFile.childImageSharp.fluid}
              size="400"
              key={i}
              caption={item.gram.caption}
            />
          ) : (
            <div>Nothing to show</div>
          )
        })}
      </StyledGallery>
    </div>
  )
}

export default Gallery
