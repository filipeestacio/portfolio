/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require("path")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Filipe Estácio",
    description:
      "Civil engineering is a professional discipline that deals with the design, construction, and maintenance of the physical and naturally built environment. In the 21st century, our world expanded to embrace the digital. As a civil engineer, so have I.",
    author: "Filipe Estacio",
    menuLinks: [
      { id: 1, name: "Home", link: "/" },
      { id: 2, name: "About", link: "/about" },
      { id: 3, name: "What I do", link: "/skills" },
      { id: 5, name: "Repos", link: "/repos" },
      { id: 6, name: "Contact", link: "/contact" },
    ],
    skills: [
      { id: 1, name: "CSS", image: "css" },
      { id: 2, name: "HTML", image: "html" },
      { id: 3, name: "JavaScript", image: "javascript" },
      { id: 4, name: "React", image: "react" },
      { id: 5, name: "GraphQL", image: "graphql" },
      { id: 6, name: "Styled Components", image: "styledcomponents" },
      { id: 7, name: "Gatsby", image: "gatsby" },
      { id: 8, name: "React-Spring", image: "reactspring" },
      { id: 9, name: "NodeJS", image: "nodeJS" },
      { id: 10, name: "ExpressJS", image: "express" },
      { id: 11, name: "Git", image: "github" },
      { id: 12, name: "MongoDB", image: "mongodb" },
    ],
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "images"),
      },
    },
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          { family: "Roboto", variants: ["300", "400", "700"] },
          { family: "Amatic SC", subsets: ["latin"], variants: ["400", "700"] },
        ],
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "GITHUB",
        // This is the field under which it's accessible
        fieldName: "github",
        // URL to query from
        url: "https://api.github.com/graphql",
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      },
    },
  ],
}

// TODO: Resolve SAFARI compatibility issue with background image plugin. More info in https://www.gatsbyjs.org/packages/gatsby-background-image/
