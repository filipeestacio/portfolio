import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StyledGallery } from "./Gallery.styled"
import Image from "gatsby-image"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode {
        grams: edges {
          gram: node {
            id
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
            <Image fluid={item.gram.localFile.childImageSharp.fluid} key={i} />
          ) : (
            <div>Nothing to show</div>
          )
        })}
      </StyledGallery>
    </div>
  )
}

export default Gallery
