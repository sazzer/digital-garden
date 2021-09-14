module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/content/garden`,
        rootNote: `/index`,
      },
    },
  ],
  siteMetadata: {
    title: "Graham's Digital Garden",
  },
}
