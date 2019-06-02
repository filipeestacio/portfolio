/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require("path")

module.exports = {
  siteMetadata: {
    title: "Filipe Estácio",
    description:
      "Civil engineering is a professional discipline that deals with the design, construction, and maintenance of the physical and naturally built environment. In the 21st century, our world expanded to embrace the digital. As a civil engineer, so have I.",
    author: "Filipe Estacio",
    menuLinks: [
      { id: 1, name: "Home", link: "/" },
      { id: 2, name: "About", link: "/about" },
      { id: 3, name: "Skills", link: "/skills" },
      { id: 4, name: "Learning", link: "/learning" },
      { id: 5, name: "Projects", link: "/projects" },
      { id: 6, name: "Where to?", link: "/development" },
      { id: 7, name: "Contact", link: "/contact" },
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
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
}

// TODO: Resolve SAFARI compatibility issue with background image plugin. More info in https://www.gatsbyjs.org/packages/gatsby-background-image/
