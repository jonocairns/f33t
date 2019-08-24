module.exports = {
  siteMetadata: {
    title: `f33t`,
    description: `cheers boys`,
    author: `lol`,
    siteUrl: "https://feetpics.nz"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `f33t`,
        short_name: `f33t`,
        start_url: `/`,
        description: `Who doesnt like feet?`,
        lang: `en`,
        icon: `src/components/favicon.png`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-146432627-1",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
