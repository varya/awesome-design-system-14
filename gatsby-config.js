const config = {
  siteMetadata: {
    title: "My awesome design system",
    shortName: "Doctocat",
    description: "A Gatsby theme for creating Primer documentation sites",
    imageUrl:
      "https://user-images.githubusercontent.com/10384315/53922681-2f6d3100-402a-11e9-9719-5d1811c8110a.png",
  },
  plugins: [
    {
      resolve: "@bridgetool/gatsby-theme-dev",
    },
  ],
}

// DO NOT REMOVE
// https://www.gatsbyjs.org/docs/path-prefix/
if (process.env.PATH_PREFIX) {
  config.pathPrefix = process.env.PATH_PREFIX
}

module.exports = config
