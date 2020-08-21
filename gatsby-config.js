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
      { id: 6, name: "Social Media", link: "/socialmedia" },
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
    {
      resolve: `gatsby-source-twitter`,
      options: {
        credentials: {
          consumer_key: process.env.TWITTER_API_KEY,
          consumer_secret: process.env.TWITTER_API_SECRET,
          bearer_token: process.env.TWITTER_BEARER_TOKEN,
        },
        queries: {
          myTweets: {
            endpoint: "statuses/user_timeline",
            params: {
              user_id: process.env.TWITTER_USER_ID,
              include_rts: false,
              exclude_replies: true,
              tweet_mode: "extended",
            },
          },
        },
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: process.env.INSTAGRAM_USER_ID,
      },
    },
  ],
}

// TODO: Resolve SAFARI compatibility issue with background image plugin. More info in https://www.gatsbyjs.org/packages/gatsby-background-image/
