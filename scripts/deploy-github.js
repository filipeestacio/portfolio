const ghpages = require("gh-pages")

ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "https://github.com/filipeestacio/filipeestacio.github.io.git",
  },
  error => {
    if (error) {
      console.log(error)
    } else {
      console.log("Deployment complete")
    }
  }
)
