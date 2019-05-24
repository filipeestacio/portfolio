/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "A Digital Civil Engineer",
    description:
      "Civil engineering is a professional engineering discipline that deals with the design, construction, and maintenance of the physical and naturally built environment. In the 21st century, our world expanded to embrace the digital. As a civil engineer, so have I.",
    author: "Filipe Estacio",
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About",
        link: "/about",
      },
      {
        name: "The Lab",
        link: "/lab",
      },
    ],
  },
  plugins: ["gatsby-plugin-styled-components"],
}
