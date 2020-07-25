const ghpages = require("gh-pages")

ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "https://github.com/filipeestacio/filipeestacio.github.io.git",
  },
  () => {
    console.log("Deployment complete")
  }
)
